const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const postAPI = require('./routes/post/PostRouter');

app.use('/api/post', postAPI);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`Listening on port ${port}...`))