const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const bodyParser = require('body-parser');

const { articleRouter } = require('./routes/article-router');
const { outfitRouter } = require('./routes/outfit-router');

const app = express();
const PORT = 3001 || process.env.PORT;

app.use(logger('dev'));
app.use(cors());
app.use(bodyParser.json());

app.use('/articles', articleRouter);
app.use('/outfits', outfitRouter);

app.get('/', async (req, res) => {
  try {
    res.send({ message: 'Index reached.' });
  } catch (e) {
    res.status(e.status).json();
  }
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));
