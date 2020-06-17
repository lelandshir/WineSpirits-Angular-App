const mongoose = require(`mongoose`);

const drinkSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  producer: { type: String, required: true },
  origin: { type: String, required: true },
  description: { type: String, required: true },
  abv: { type: Number, required: true },
});

const Drinks = mongoose.model(`Drink`, drinkSchema);

module.exports = Drinks;
