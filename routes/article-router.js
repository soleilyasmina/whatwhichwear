const express = require('express');
const { Article } = require('../models');

const articleRouter = express.Router();

// INDEX and SHOW routes
articleRouter.route('/')
  .get(async (req, res) => {
    try {
      const articles = await Article.findAll();
      res.send(articles);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  })
  .post(async (req, res) => {
    try {
      const article = await Article.create(req.body);
      res.send(article);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
});

// SHOW, UPDATE, and DELETE routes
articleRouter.route('/:id')
  .get(async (req, res) => {
    try {
      const article = await Article.findByPk(req.params.id);
      res.send(article);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  })
  .put(async (req, res) => {
    try {
      const article = await Article.findByPk(req.params.id);
      await article.update(req.body);
      res.send(article);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const article = await Article.findByPk(req.params.id);
      await article.destroy();
      res.send(article);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
});

module.exports = {
  articleRouter
}
