const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(logger('dev'));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
  try {
    res.send({ message: 'yeet' });
  } catch (e) {
    res.status(e.status).json();
  }
});

app.listen(PORT, () => console.log(`Testing on ${PORT}`));
