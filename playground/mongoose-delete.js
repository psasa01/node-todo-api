const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');
const {
    User
} = require('./../server/models/user');
const {
    ObjectID
} = require('mongodb');

Todo.findByIdAndRemove('59f6d5d8f4c07e195cc41478').then((todo) => {
    console.log(todo);
});
