const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authTOken = process.env.TWILIO_AUTH_TOKEN;

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("dotenv").config();

const client = require("twilio")(accountSid, authTOken);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.post("/", async (req, res) => {
  const quantity = req.body.quantity;
  const foodItem = req.body.foodItem;
  client.messages
    .create({
      to: "+919088720168",
      from: process.env.MY_TWILIO_NUMBER,
      body: `Food item entered in refrigator is ${foodItem} which is sufficient for ${quantity} people`,
    })
    .then((message) => console.log(message));
  console.log(quantity);
  console.log(quantity);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});