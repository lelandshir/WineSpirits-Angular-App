const mongoose = require(`mongoose`);

const drinkSchema = new mongoose.Schema({
  brand: String,
  type: String,
  producer: String,
  origin: String,
  description: String,
  abv: Number,
});

const Drinks = mongoose.model(`Drink`, drinkSchema);

module.exports = Drinks;
