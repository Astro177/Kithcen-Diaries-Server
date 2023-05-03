const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json({ hey: "something is running" });
});
const chefDetails = require("./data_file/chefs.json");

app.get("/chefData", (req, res) => {
  res.send(chefDetails);
});

app.listen(5000, () => {
  console.log("server running");
});
