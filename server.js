'use strict' 

const express = require('express');
const port = 8000;
const host = '0.0.0.0';
const app = express();

app.get('/',(req,res) => {
    res.send(`Hello World - 2.0.0`);
});
app.listen(port,host,() => {
    console.log(`Running On http://${host}:${port}`);
});