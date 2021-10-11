const express = require("express");
const cors = require("cors");
const app = express();
const fs = require("fs");

app.use(cors);
app.use(express.json());

const readData = fs.readFileSync("./db/db.json", "utf-8");
let data = JSON.parse(readData);
console.log(data);

app.get("/", (req, res) => {
  res.send("hello world");
});

const PORT = 5000;
app.listen(PORT, () => console.log("listening on port 5000"));
