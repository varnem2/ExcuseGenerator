const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    return response.send("Yo");
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});