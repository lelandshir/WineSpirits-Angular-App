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
router.put(`/:id`, (req, res) => {
  Drinks.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }, //returns the item you updated
    (err, updatedDrink) => {
      res.json(updatedDrink);
    }
  );
}); //put route

router.delete(`/:id`, (req, res) => {
  Drinks.findByIdAndRemove(req.params.id, (err, deletedDrinks) => {
    res.json(deletedDrinks);
  });
}); //delete route

router.post("/", (req, res) => {
  Drinks.create(req.body, (err, createdDrink) => {
    res.json(createdDrink);
  });
}); //post route

router.get("/", (req, res) => {
  Drinks.find({}, (err, foundDrink) => {
    res.json(foundDrink);
  });
}); //index

module.exports = router;
