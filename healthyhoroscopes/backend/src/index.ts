import express, { Express, Request, Response } from "express";
const { GoogleGenerativeAI } = require("@google/generative-ai");
const { HarmBlockThreshold, HarmCategory } = require("@google/generative-ai");
import { config } from 'dotenv'
config({ path: '../.env' })

config();

const app: Express = express();
const port = process.env.PORT || 2999;
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

//horoscope
app.get("/horoscope/:bday/:color", async (req: Request, res: Response) => {
    //get user data
    //feed to gemini
    //send back response
    const bday = req.params.bday as string;
    const color = req.params.color as string;
  
    const text = await horoscope(bday, color);

    res.json({'text': text});
});

async function horoscope(bday:string, color:string) {

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

  const prompt = `Write a 3 sentence positive horoscope for a person born ${bday} and whose color of the day is ${color}`

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



app.listen(port, () => {
  console.log(`tHe SeRvEr Is RuNnInG oN pOrT: ${port}`);
});