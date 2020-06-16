const express = require(`express`);
const router = express.Router();
const Drinks = require(`../models/drinks.js`);

router.get(`/seed`, (req, res) => {
  Drinks.create({
    brand: `Hendricks`,
    type: `Gin`,
    description: `Hendrick's infuses juniper and uses Bulgarian rose and cucumber to add flavour. It's bottled in a dark brown, apothecary-style bottle.`,
    producer: `William Grant & Sons`,
    origin: `Scotland`,
    abv: 44,
  });
});

router.post("/", (req, res) => {
  Drinks.create(req.body, (err, createdDrink) => {
    res.json(createdDrink);
  });
});

router.get("/", (req, res) => {
  Drinks.find({}, (err, foundDrink) => {
    res.json(foundDrink);
  });
});

module.exports = router;
