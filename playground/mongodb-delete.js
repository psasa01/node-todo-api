// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');




MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb database!');
    }
    console.log('Connected to MongoDB Server');

    db.collection('Todos').findOneAndDelete({
        text: 'Smthng more'
    }).then((result) => {
        console.log(result);
    });

});
