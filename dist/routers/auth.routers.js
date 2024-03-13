"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authRouters = express_1.default.Router();
authRouters.get("/signin", (_, res) => {
    return res.status(200).json({ msg: "Sucessfully signed in" });
});
authRouters.get("/signup", (_, res) => {
    return res.status(200).json({ msg: "Sucessfully signed up" });
});
exports.default = authRouters;
//# sourceMappingURL=auth.routers.js.map