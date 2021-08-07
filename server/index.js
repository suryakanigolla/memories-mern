import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postsRoutes from "./routes/posts.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30bm", extended: true }));
app.use(cors());

app.use("/posts", postsRoutes);

const MONGO_URL =
  "mongodb+srv://mainUser:7UWQMpQoT4ywA0EI@cluster0.keecp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => console.log(`Server started on PORT: ${PORT}`));
  })
  .catch((error) => console.log(error));

mongoose.set("useFindAndModify", false);
