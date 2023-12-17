const { Schema, model, Types } = require("mongoose");

const EMAIL_PATTERN = /^([a-zA-z]+)@([a-zA-z]+)\.([a-zA-z]+)$/;

const userSchema = new Schema({
    email:{type: String, unique: true, validate: {
        validator: (value) => EMAIL_PATTERN.test(value),
        message: 'Email must be valid'
    }},
    gender:{type:String, required: true, enum:['male', 'female']},
    hashedPassword: {type: String, required: true},
    trips:{ type: [Types.ObjectId], ref: 'Trip', def: []}
})

userSchema.index({email: 1}, {
    collation: {
        locale: 'en',
        strength: 2
    }
})

const User = model('User', userSchema);

module.exports = User;