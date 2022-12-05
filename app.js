const express = require('express');
const bodyParser = require('body-parser');
// const cors = require('cors');

const router = require('./route');

const app = express();
// app.use(cors)
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(router);

const PORT = 8081;

app.listen(PORT, (err) => {
    console.log("Server is running in port", PORT);
},)