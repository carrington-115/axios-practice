require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const axios = require("axios");

app.get("/", async (req, res) => {
  try {
    const response = await axios.get(process.env.API_URL);
    console.log(response);
  } catch (error) {
    return res.end(error);
  }
});

app.listen(process.env.PORT, () =>
  console.log(`The server is running on ${process.env.PORT}`)
);
