"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const PORT = process.env.PORT || "5000";
const app = (0, express_1.default)();
app.get("/", (_, res) => {
    return res.status(200).json({ msg: "Sucessfully running" });
});
app.listen(parseInt(PORT, 10), `0.0.0.0`, () => {
    console.log(`Server is running on PORT: ${PORT}`);
});
//# sourceMappingURL=index.js.map