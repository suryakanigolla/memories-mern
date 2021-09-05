import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import path from "path"

const __dirname = path.resolve();

import { connect } from "./config/database.js";
dotenv.config();

const MONGO_URL = process.env.CONNECTON_URL;

connect(MONGO_URL);

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.use(express.static(path.resolve(__dirname, "./build")));

export default app;
