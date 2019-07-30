// import express from 'express';
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || 3000;

const app = express();

app.get('/', (request, response) => {
    return response.send("Recieved a GET HTTP request against the root directory.");
});

//This was the tutorial and I don't like this at all... This looks yucky.
//app.listen(process.env.PORT, () => console.log(`Backend listening on port ${process.env.PORT}!`),);
app.listen(PORT, () => {
    console.log(`Backend listening on port ${PORT}!`);
});