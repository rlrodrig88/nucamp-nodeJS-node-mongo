const MongoClient = require('mongodb').MongoClient;
const assert = require('assert').strict;

const url = 'mongodb://localhost:27017';
const dbname = 'nucampsite' // name of database you want to use

// connect to server
MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => {
  
  assert.strictEqual(err, null); // (value to check, value we are checking against)
  
  console.log('Connected correctly to server');

  const db = client.db(dbname);  // db will now have a set of methods for interacting with the database
  
  // delete all the documents in the campsites collection
  db.dropCollection('campsites', (err, result) => {
    assert.strictEqual(err, null);
    console.log('Dropped Collection', result);

    const collection = db.collection('campsites');
    
    //insert document into collection
    collection.insertOne({name: "Breadcrumb Trail Campground", description: 'Test'}, 
      (err, result) => {
        assert.strictEqual(err, null);
        console.log('Insert Document:', result.ops); // ops will be an array with the new document inserted
        
        // log the updated collection
        // convert collection to an array of documents for logging
        collection.find().toArray((err, docs) => {  
          console.log('Found Documents:', docs);

          client.close();
        })  

      });
  });
});