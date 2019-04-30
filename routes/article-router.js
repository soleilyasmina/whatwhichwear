const express = require('express');
const { Article } = require('../models');

const articleRouter = express.Router();

articleRouter.get('/', async (req, res) => {
  try {
    const articles = await Article.findAll();
    res.send(articles);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

articleRouter.post('/', async (req, res) => {
  try {
    const article = await Article.create(req.body);
    res.send(article);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

articleRouter.get('/:id', async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    res.send(article);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

articleRouter.put('/:id', async (req, res) => {
  try {
    const article = await Article.findByPk(req.params.id);
    await article.update(req.body);
    res.send(article);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

module.exports = {
  articleRouter
}
