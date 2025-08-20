import express from "express";
import connectDatabase from "./config/connectDatabase.js";
import authRouter from "./routes/userRoute.js";
import cors from "cors"
import newsRouter from "./routes/apiRoute.js";



const app = express();
app.use(express.json());
app.use(cors())

const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.json(`hello world`);
});
app.use("/api/auth", authRouter);
app.use('/api/news',newsRouter)

app.listen(port, () => {
  try {
    console.log(`server running on http://localhost:${port}`);
    connectDatabase();
  } catch (error) {
    console.log(error);
  }
});
  