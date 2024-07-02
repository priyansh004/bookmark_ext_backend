import express from "express";
const cookieParser = require("cookie-parser");
const cors = require("cors");
import { PrismaClient } from "@prisma/client";
const morgan = require("morgan");
const helmet = require("helmet");
import authrouter from  './routes/auth'

const prisma = new PrismaClient();

const app = express();
const port = process.env.PORT || 3000;

require("dotenv").config();
app.use(express.json());
app.use(cookieParser());

const corsOption = {
  origin: "*",
  credentials: true,
  exposedHeaders: ["authorization"],
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
};
app.use(cors(corsOption));

app.use(morgan("common"));
app.use(helmet()); 

//routes
app.get("/", (req, res) => {
  res.send("Hello, TypeScript + Node.js + Express!");
});


app.use("/api", authrouter);


// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
