import express from "express";
import cors from "cors";

import dotenv from "dotenv";
import Express from 'express';

dotenv.config();

// Settings
const APP_NAME = process.env.APP_NAME || "mon-app";
const WELCOME_APP = `Welcome on ${APP_NAME} rest api`;

// Application
const app = express();
app.use(Express.json());

app.use(cors({origin: '*'}))
app.get("/", (req :any, res :any) => {
    res.send(WELCOME_APP).status(200);
});

export default app;