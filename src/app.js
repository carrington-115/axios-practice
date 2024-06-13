require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());

app.get("/", async (req, res) => {
  const { data } = await axios.get(process.env.API_URL);
  console.log(data);
  res.json(data);
});

app.listen(process.env.PORT, () =>
  console.log(`The server is running on ${process.env.PORT}`)
);
