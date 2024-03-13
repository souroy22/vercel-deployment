import express, { Request, Response } from "express";

const authRouters = express.Router();

authRouters.get("/signin", (_: Request, res: Response) => {
  return res.status(200).json({ msg: "Sucessfully signed in" });
});

authRouters.get("/signup", (_: Request, res: Response) => {
  return res.status(200).json({ msg: "Sucessfully signed up" });
});

export default authRouters;
