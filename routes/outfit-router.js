const express = require('express');
const { Outfit, Article } = require('../models');

const outfitRouter = express.Router();

outfitRouter.get('/', async (req, res) => {
  try {
    const outfits = await Outfit.findAll();
    res.send(outfits);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

outfitRouter.post('/', async (req, res) => {
  try {
    const outfit = await Outfit.create(req.body);
    res.send(outfit);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

outfitRouter.get('/:id', async (req, res) => {
  try {
    const outfit = await Outfit.findByPk(req.params.id);
    res.send(outfit);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

outfitRouter.put('/:id', async (req, res) => {
  try {
    const outfit = await Outfit.findByPk(req.params.id);
    await outfit.update(req.body);
    res.send(outfit);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

outfitRouter.delete('/:id', async (req, res) => {
  try {
    const outfit = await Outfit.findByPk(req.params.id);
    await outfit.destroy();
    res.send(outfit);
  } catch (e) {
    res.status(500).json({ msg: e.message });
  }
});

module.exports = {
  outfitRouter
}
