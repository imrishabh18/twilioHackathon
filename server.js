const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authTOken = process.env.TWILIO_AUTH_TOKEN;

const express = require("express");
const bodyParser = require("body-parser");
const path = require('path');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("./"));
  // require("dotenv").config();

// const client = require("twilio")(accountSid, authTOken);

app.get("/", (req,res) => {
  res.sendFile(path.join(__dirname,'/index.html'))
})
app.post("/", async (req, res) => {
  const quantity = req.body.quantity;
  const foodItem = req.body.foodItem;
  const numbers = ["+919088720168","+918088540168","+919578720168","+918088720168","+919088440168","+919088720168","+919038720168","+919048720167"];
  numbers.forEach(sendMsg);
  function sendMsg(){
  // client.messages
  //   .create({
  //     to: "+919088720168",
  //     from: process.env.MY_TWILIO_NUMBER,
  //     body: `Food item entered in refrigator is ${foodItem} which is sufficient for ${quantity} people`,
  //   })
  //   .then((message) => console.log(message));
  }
  console.log(quantity);
});
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});

// if(process.env.NODE_ENV === 'production'){

//   // require("dotenv").config();
// //   const client = require("twilio")(accountSid, authTOken);
//   app.use(express.static('./'));

// app.get("*", (req, res) => {
//     res.sendFile(path.join(__dirname, "/index.html"));
// })}
