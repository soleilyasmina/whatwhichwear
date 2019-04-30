const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const { articleRouter } = require('./routes/article-router');

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(logger('dev'));
app.use(bodyParser.json());

app.use('/articles', articleRouter);

app.get('/', async (req, res) => {
  try {
    res.send({ message: 'Index reached.' });
  } catch (e) {
    res.status(e.status).json();
  }
});

app.listen(PORT, () => console.log(`Testing on ${PORT}`));
