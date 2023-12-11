const { Schema, Types, model } = require("mongoose");

const IMAGE_URL_PATTERN = /^https?:\/\/.+/

const gameSchema = new Schema({
    name: {type: String, minlength: [4, 'Name must be at least 4 characters long.']},
    image: {type: String, required: true, validate: {
        validator: (value) => IMAGE_URL_PATTERN.test(value),
        message: 'ImageUrl must be valid URL'
    }},
    price: {type: Number, required: true, min:[1, 'Price must be positive number.']},
    description: {type: String, minlength: [10, 'Description must be at least 10 characters long.']},
    genre: {type: String, minlength: [2, 'Genre must be at least 2 characters long.']},
    platform:{type: String, required: true, enum:['PC', 'Nintendo', 'PS4', 'PS5', 'XBOX']},
    boughtBY: { type: [Types.ObjectId], ref: 'User', default: []},
    owner: {type: Types.ObjectId, ref: 'User', required: true}
})

const Game = model('Game', gameSchema);

module.exports = Game;