import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import weatherRouter from "./routes/weather.js";
import { connectDB } from "./config/db.js";

dotenv.config();
connectDB();

const app = express();
app.use(cors({
  origin: "http://localhost:5173",
}));

app.use(express.json());

app.use("/api/weather", weatherRouter);

app.get("/", (req, res) => {
  res.send("Weather Advisor Backend Running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));