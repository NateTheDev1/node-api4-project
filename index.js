const express = require("express");

const app = express();
app.use(express.json());

const data = require("./data");

app.get("/", (req, res) => {
  res
    .status(200)
    .json({ message: "Welcome to the deployment assignment Nicholas ;)" });
});

app.get("/", (req, res) => {
  res.status(200).json(data);
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
