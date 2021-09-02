import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv"

import postsRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js"

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30bm", extended: true }));
app.use(cors());

app.use("/posts", postsRoutes);
app.use("/auth", authRoutes)

const MONGO_URL = process.env.CONNECTON_URL;
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
  })
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
