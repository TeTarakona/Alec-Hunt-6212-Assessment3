const mongoose = require("mongoose");

// Define the schema for the "Character Sheets" collection
const InventorySchema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String,
  price: Number,
  category: String,
  image: {
    name: String,
    description: String,
    img: String,
  },
  discount: {
    discount_type: String, // Can be either "Percent" or "Number off"
    value: Number,
  },
});

// Create a Mongoose model for the "Inventory" collection
const InventorySheet = mongoose.model(
  "InventorySheet",
  InventorySchema,
  "Inventory"
);

module.exports = InventorySheet;

