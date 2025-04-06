const mongoose = require("mongoose");

const farmerSchema = new mongoose.Schema({
  name: String,
  dob: Date,
  aadhar: String,
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: String,
  email: String,
  address: String,
  language: String,
  skill: String,
  otherSkill: String,
  kyf: Boolean,
  landSize: Number,
  landUnit: String,
  annualIncome: Number,
  interestedInSchemes: Boolean,
});

module.exports = mongoose.model("Farmer", farmerSchema);
