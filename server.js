const { urlencoded } = require('express');
const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 5000;
const router = express.Router();

app.use(express.json());
app.use(urlencoded({ extended: false }));

require('./db/db')();

app.use('/subjects', require('./routes/subjects'));
app.use('/', (req, res, next) => res.send('Welcome to subject finder API'));

app.listen(PORT, () =>
  console.log(`Server listening on port localhost:${PORT}`)
);
