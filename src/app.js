require("dotenv").config({ path: "../.env" });
const express = require("express");
const app = express();
const axios = require("axios");

app.use(express.json());
app.use(express.static("./views"));
app.use(express.urlencoded({ extended: true }));

app.get("/courses", async (req, res) => {
  const { data } = await axios.get(process.env.API_URL);
  if (!data) throw Error(data.response);
  res.json(data);
});

// using get with headers
app.get("/get-with-headers", async (req, res) => {
  const { data } = await axios.get(process.env.API_URL, {
    Headers: {
      Accept: "application/json",
    },
  });
  console.log(data);
});

app.post("/user-profile", (req, res) => {
  const data = req.body;
  if (!data) return res.end("Invalid data");
  res.json({ success: true, data: data });
});

app.listen(process.env.PORT, () =>
  console.log(`The server is running on ${process.env.PORT}`)
);
