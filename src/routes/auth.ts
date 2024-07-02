import { title } from "process";
import { text } from "stream/consumers";

import express, { Request, Response } from "express";
const router = express.Router();


router.get("/", (req: Request, res: Response):any => {
     res.send("Hele.js + Express!");
  });


export default router
