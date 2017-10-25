var mongoose = require('mongoose');

var User = mongoose.model('User', {
    email: {
        type: String,
        trim: true,
        required: true,
        minLength: 1
    }
});

/* var newUser = new User({
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
