import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("lol server and what not ig");
});

app.listen(port, () => {
  console.log(`tHe SeRvEr Is RuNnInG oN pOrT: ${port}`);
});