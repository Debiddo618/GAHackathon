
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cropSchema = new Schema({
    name: {
      type: String,
      required: true,
      unique: true, 
    },
    rainfall_range: {
      type: [Number], // [min, max in mm]
      required: true, 
    },
    growth_duration: {
      type: Number, // Growth duration in days
    },
    optimal_season: {
      type: String,
      required: true, // e.g., 'Rainy', 'Summer', 'Winter'
    },
  }, { timestamps: true });
  
  const Crop = mongoose.model('Crop', cropSchema);
  module.exports = Crop;
  