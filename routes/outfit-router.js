const express = require('express');
const { Outfit, Article } = require('../models');

const outfitRouter = express.Router();

// INDEX and POST routes
outfitRouter.route('/')
  .get(async (req, res) => {
    try {
      const outfits = await Outfit.findAll({
        include: [ Article ]
      }
      );
      res.send(outfits);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  })
  .post(async (req, res) => {
      try {
        const outfit = await Outfit.create(req.body);
        res.send(outfit);
      } catch (e) {
        res.status(500).json({ msg: e.message });
      }
  });

// SHOW, UPDATE, and DELETE routes
outfitRouter.route('/:id')
  .get(async (req, res) => {
    try {
      const outfit = await Outfit.findOne({
        where: { id: req.params.id },
        include: [ Article ]
      });
      res.send(outfit);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  })
  .put(async (req, res) => {
    try {
      const outfit = await Outfit.findByPk(req.params.id);
      await outfit.update(req.body);
      res.send(outfit);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const outfit = await Outfit.findByPk(req.params.id);
      await outfit.destroy();
      res.send(outfit);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
});

// adding / removing articles from outfits
outfitRouter.route('/:outfit/:article')
  .post(async (req, res) => {
    try {
      const outfit = await Outfit.findByPk(req.params.outfit);
      const article = await Article.findByPk(req.params.article);
      outfit.addArticle(article);
      res.send(outfit);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
  })
  .delete(async (req, res) => {
    try {
      const outfit = await Outfit.findByPk(req.params.outfit);
      const article = await Article.findByPk(req.params.article);
      outfit.removeArticle(article);
      res.send(outfit);
    } catch (e) {
      res.status(500).json({ msg: e.message });
    }
});

module.exports = {
  outfitRouter
}
