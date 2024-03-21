require('dotenv').config()
const express = require('express');

const connectdb = require('./Config/database');
connectdb();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const route = require('./routes/designRoutes');
app.use('/',route);

const conRoute = require('./routes/consumerRoutes');
app.use('/',conRoute);

const admRoute = require('./routes/adminRoutes')
app.use('/',admRoute);

const port = process.env.PORT || 8000;

app.listen(port,()=>{
    console.log(`server run at http://localhost:${port}`);
});