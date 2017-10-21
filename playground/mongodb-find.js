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

    /*   db.collection('Todos').find({
           _id: new ObjectID('59eafd2431ef2912a82e9649')
       }).toArray().then((docs) => {
           console.log('Todos');
           console.log(JSON.stringify(docs, undefined, 2));
       }, (err) => {
           console.log('Unable to fetch Todos', err)
       }); */

    db.collection('Todos').find().count().then((count) => {
        console.log(`Todos count: ${count}`);
    }, (err) => {
        console.log('Unable to fetch Todos', err)
    });



    // db.close();
});
