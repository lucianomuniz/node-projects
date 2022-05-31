// CRUD create read update delete

const { MongoClient, ObjectID, ObjectId } = require('mongodb');

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

// const id = new ObjectID();
// console.log(id);

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database!');
    }

    const db = client.db(databaseName);

    db.collection('tasks').insertOne(
      {
        description: 'Clean the house',
        completed: true,
      },
      (error, result) => {
        if (error) {
          return console.log('Unable to insert tasks!');
        }

        console.log(result.ops);
      }
    );
  }
);
