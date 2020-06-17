const mongoose = require(`mongoose`);

const drinkSchema = new mongoose.Schema({
  brand: { type: String, required: true },
  type: { type: String, required: true },
  producer: { type: String, required: false },
  origin: { type: String, required: false },
  description: { type: String, required: false },
  abv: { type: Number, required: true },
});

const Drinks = mongoose.model(`Drink`, drinkSchema);

module.exports = Drinks;
