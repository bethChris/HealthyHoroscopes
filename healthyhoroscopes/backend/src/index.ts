import express, { Express, Request, Response } from "express";
import bodyParser = require('body-parser');
const cors = require('cors');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
import {PythonShell} from 'python-shell';
import { config } from 'dotenv'

config({ path: '../.env' });

config();

const app: Express = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
const port = process.env.PORT || 2999;
const genAI = new GoogleGenerativeAI(process.env.API_KEY);
const modelPath = "../models/trained_sentiment_analysis_model.joblib";


app.use(cors({
  origin: 'http://localhost:3000'
}));

//horoscope
app.get("/horoscope/:bday", async (req: Request, res: Response) => {
  //get user data
  //feed to gemini
  //send back response
  const bday = req.params.bday as string;

  const text = await horoscope(bday);

  res.json({'text': text});
});

async function horoscope(bday:string) {

  const generationConfig = {
      stopSequences: [""],
      //maxOutputTokens: 300,
      temperature: .9, //the randomness of the output
      //topP: 0.1, //the maximum cumulative probability of tokens to consider when sampling
      //topK: 16, //the maximum number of tokens to consider when sampling
  };

  const safetySettings = [
      {
          category: HarmCategory.HARM_CATEGORY_HARASSMENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
          threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
      },
      {
          category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
          threshold: HarmBlockThreshold.BLOCK_NONE,
      },
  ];

  const model = genAI.getGenerativeModel({
      model: "gemini-pro",
      generationConfig,
      safetySettings
  });

  const prompt = `Write a 5 sentence positive, uplifting horoscope for a person born ${bday}. Make sure to address the horoscope to their zodiac sign.`

  try {
      const result = await model.generateContent(prompt);
      const response = await result.response;

      console.log(JSON.stringify(response));
      console.log(response.candidates[0].safetyRatings);
      console.log(response.text());
      return response.text();

  } catch (err) {
      console.log(err);
      return "";
  }
  

}

app.post("/model/affirmation", async (req:Request, res: Response)=> {
  const affirmation = req.body.affirmation;
  PythonShell.runString(`import joblib
model = joblib.load('${modelPath}')
affirmation = {}
prediction = model.predict(["${affirmation}"])
print(prediction[0])`
  ).then((results) => {
    const prediction = results[0];
    console.log(prediction)
    res.json({ prediction });
  }).catch((err) => {
    console.error('Error making model prediction:', err);
    res.status(500).json({ error: 'Internal server error' });
  });
  
});


app.listen(port, () => {
  console.log(`tHe SeRvEr Is RuNnInG oN pOrT: ${port}`);
});