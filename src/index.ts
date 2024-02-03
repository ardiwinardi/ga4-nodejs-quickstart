import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import { getCountryStatistic } from "./api/getCountryStatistic";
import { getVisitorStatistic } from "./api/getVisitorStatistic";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.get("/country", async (req: Request, res: Response) => {
  const response = await getCountryStatistic();
  res.json(response.rows);
});

app.get("/visitor", async (req: Request, res: Response) => {
  const response = await getVisitorStatistic();
  res.json(response.rows);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
