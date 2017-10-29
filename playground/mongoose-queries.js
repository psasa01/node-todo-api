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

//var id = '59f5c19f27f8500d48e1f8ee1';
//
//if (!ObjectID.isValid(id)) {
//    console.log('IDDD NOTTT VALIDDD!!!!')
//}

//Todo.find({
//        _id: id
//    })
//    .then((todos) => {
//        console.log('Todos', todos);
//    });
//
//Todo.findOne({
//        _id: id
//    })
//    .then((todo) => {
//        console.log('Todo', todo);
//    });

//Todo.findById(id).then((todo) => {
//    if (!todo) {
//        return console.log('ID not found!')
//    }
//    console.log('To do:', todo)
//}).catch((e) => {
//    console.log(e);
//});

var id = '59f5c931342b641b34658a67';

if (!ObjectID.isValid(id)) {
    console.log('NOOOOTO VALIIRIRIIDFIDI')
}

User.findById(id).then((user) => {
    if (!user) {
        return console.log('USERR NOTT FOUND!!!')
    }
    console.log('User: ', user)
}).catch((e) => {
    console.log(e);
});
