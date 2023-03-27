import "dotenv/config";
import cors from "cors";
import express from "express";

console.log("Hello Node.js project.");
console.log(process.env.MY_SECRET);

const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
