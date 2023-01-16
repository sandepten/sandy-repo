"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use((0, body_parser_1.json)());
app.get("/", (req, res) => {
    res.send("Hello World from Sandeep");
});
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
