const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const api = require('./routes/api.js');

app.use('/api', api);

const port = process.env.PORT || 3001;
app.listen(3002, () => console.log(`Listening on port ${port}...`))