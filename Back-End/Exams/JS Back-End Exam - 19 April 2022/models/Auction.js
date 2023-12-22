const { Schema, Types, model } = require("mongoose");

const auctionSchema = new Schema({
  title: {type: String, minlength: [4, 'Title must be at least 4 characters long!']},
  category: {type: String, required: true, enum: ['Vehicles', 'Real Estate', 'Electronics', 'Furniture', 'Other']},
  imageUrl: {type: String},
  price: {type: Number, min: [0, 'Price cant be negative!']},
  description: {type: String, maxlength: [200, 'Description must be at most 200 characters long!']},
  author: {type: Types.ObjectId, ref: 'User', required: true},
  bidder: {type: Types.ObjectId, ref: 'User'}
})

const Auction = model('Auction', auctionSchema);

module.exports = Auction;