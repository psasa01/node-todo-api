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

    /* db.collection('Todos').findOneAndUpdate({
        text: 'Pronadji gume'
    }, {
        $set: {
            completed: true
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    }); */

    db.collection('Users').findOneAndUpdate({
        name: 'Saša'
    }, {
        $inc: {
            age: 2
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log(result);
    });

});
