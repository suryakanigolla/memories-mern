import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";

import { connect } from "./config/database.js";
dotenv.config();

const MONGO_URL = process.env.CONNECTON_URL;

connect(MONGO_URL);

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

export default app;
