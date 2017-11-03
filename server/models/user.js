const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minLength: 1,
        unique: true,
        validate: {
            validator: validator.isEmail
        },
        message: '{VALUE} is not a valid email'
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    tokens: [{
        access: {
            type: String,
            required: true
        },
        token: {
            type: String,
            required: true
        }
    }]
});



/*var newUser = new User({
    email: '  psasa01@gmail.com  '
});

newUser.save().then((user) => {
    console.log('User saved!', user);
}, (e) => {
    console.log('Error saving user!', e)
}); */

module.exports = {
    User
}
