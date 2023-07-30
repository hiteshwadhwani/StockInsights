import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";

//Import Routes
import api from "./api/index";

// access environment variables
dotenv.config();

//initialize app with express
const app: Express | undefined = express();

//Load app middelware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

// Serve all static files inside public directory
app.use("/static", express.static("public"));

//Routes handeling the request
app.use("/", api);

export default app;
