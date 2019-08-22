const express = require('express');
const bodyParser = require('body-parser');
const db = require('./models');
const port = process.env.port || 3000;

const app = express();

app.use(bodyParser.json());

app.get('/', (request, response) => {
    response.send("Yo");
});

const routes = require('./routes');
app.use('/', routes);


db.sequelize.sync().then(() => {
    app.listen(port, () => {
        console.log(`Server is up on port ${port}`);
    });
});
