import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import dotenv from "dotenv";

// dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(helmet()); //helmet is a security middleware that helps you protect your app by setting various HTTP headers
app.use(morgan("dev")); //logs the requests
app.use(cors());
app.use(express.json()); //parse the incoming data
app.get("/", (req, res) => {
  res.send("Hello from the backend");
});
app.get("/test", (req, res) => {
  res.send("Hello from the test");
});
app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
