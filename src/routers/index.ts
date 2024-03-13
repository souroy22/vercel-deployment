import express from "express";
import authRouters from "./auth.routers";

const router = express.Router();

router.use("/auth", authRouters);

export default router;
