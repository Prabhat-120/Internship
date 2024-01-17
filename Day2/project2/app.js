const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');

const router = require("./routes/route");

const app = express();
const port = 3000;

const DB_CONNECTION_URI = "mongodb://127.0.0.1:27017";
const DB_NAME = "TechnoyugaDB";

mongoose
  .connect(`${DB_CONNECTION_URI}/${DB_NAME}`)
  .then(() => {
    console.log("DB connection established.");
  })
  .catch((err) => {
    console.log("Connection error" + err.message);
  });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/',router)

app.set('view engine', 'ejs');

app.listen(port,(req,res)=>{
    console.log(`server run at port ${port}`);
})

