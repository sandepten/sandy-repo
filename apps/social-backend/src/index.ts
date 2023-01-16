import { json } from "body-parser";
import express from "express";

const app = express();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World from Sandeep");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
