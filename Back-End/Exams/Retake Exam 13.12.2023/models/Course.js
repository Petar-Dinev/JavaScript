const { Schema, model, Types } = require("mongoose");

const IMAGE_URL_PATTERN = /^https?:\/\/.+/i;

const courseSchema = new Schema({

    title: {type: String, required: true, minlength: [5, 'Title must be at least 5 characters long!'] },
    type: {type: String, required: true, minlength: [3, 'Type must be at least 3 characters long!']},
    certificate: {type: String, required: true, minlength: [2, 'Certificate must be at least 2 characters long!']},
    image: {type: String, required: true, validate: {
        validator: (value) => IMAGE_URL_PATTERN.test(value),
        message: 'Image url must be valid URL!'
    }},
    description: {type: String, required: true, minlength: [10, 'Description must be at least 10 characters long!']},
    price: {type: Number, required: true, min: [1, 'Price must be positive number!']},
    signUpList: {type: [Types.ObjectId], ref:'User', default: []},
    owner: {type: Types.ObjectId, ref: "User", required: true}
    
})

const Course = model('Course', courseSchema);

module.exports = Course;