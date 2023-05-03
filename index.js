const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.json({ hey: "something is running" });
});
const chefDetails = require("./chefs.json");

app.get("/chefData", (req, res) => {
  res.send(chefDetails);
});

app.listen(5000, () => {
  console.log("server running");
});
