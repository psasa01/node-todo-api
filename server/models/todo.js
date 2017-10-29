var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        unique: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Date,
        default: null
    }
});

module.exports = {
    Todo
}

/* var newTodo = new Todo({
    text: 'This is SIXTH ToDo',
    completed: false,
    completedAt: Date.now()
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc);
}, (e) => {
    console.log('Unable to save todo', e)
}); */
