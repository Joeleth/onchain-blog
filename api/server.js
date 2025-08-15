import express from "express";
import connectDatabase from "./config/connectDatabase.js";

const app = express();
app.use(express.json());

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json(`hello world`);
});

app.listen(port, () => {
  try {
    console.log(`server running on http://localhost:${port}`);
    connectDatabase();
  } catch (error) {
    console.log(error);
  }
});
