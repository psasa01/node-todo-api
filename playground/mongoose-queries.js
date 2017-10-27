const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

var id = '59f2d9ca0c982223fc4d03e7';

Todo.find({
        _id: id
    })
    .then((todos) => {
        console.log('Todos', todos);
    });

Todo.findOne({
        _id: id
    })
    .then((todo) => {
        console.log('Todo', todo);
    });

Todo.findById(id).then((todo) => {
    console.log('To do:', todo)
});
