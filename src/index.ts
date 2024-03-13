import express, { Request, Response } from "express";
import dotenv from "dotenv";
import router from "./routers";

dotenv.config();
const PORT = process.env.PORT || "5000";
const app = express();

app.get("/", (_: Request, res: Response) => {
  return res.status(200).json({ msg: "Sucessfully running" });
});

app.use("/api/v1", router);

app.listen(parseInt(PORT, 10), `0.0.0.0`, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
