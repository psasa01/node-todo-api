// const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');

var obj = new ObjectID();
console.log(obj);


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDb database!');
    }
    console.log('Connected to MongoDB Server');

    /*db.collection('Todos').insertOne({
           text: 'Smthng to do',
           completed: false
       }, (err, result) => {
           if (err) {
               return console.log('Unable to create record!', err)
           }
           console.log(JSON.stringify(result.ops, undefined, 2));
       }); */

    /*  db.collection('Users').insertOne({
         name: 'Saša',
         age: 38,
         location: "Sarajevo"
     }, (err, result) => {
         if (err) {
             return console.log('Fakat nisam u mogucnosti :)', err)
         }
         console.log(result.ops[0]._id.getTimestamp());
     }); */

    db.close();
});
