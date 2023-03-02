const express = require("express");
const app = express();
const PORT = 3000;
const customers = [
  {
    name: "Joel",
    industry: "Music",
  },
  {
    name: "Zack",
    industry: "Sports",
  },
  {
    name: "Luke",
    industry: "Health",
  },
];

app.get("/", (req, res) => {
  res.send("Welcome!");
});

app.get("/api/customers", (req, res) => {
  res.send({ data: customers });
});

app.post("/", (req, res) => {
  res.send("This is a post request!");
});

app.listen(PORT, () => {
  console.log("App listening on port " + PORT);
});
