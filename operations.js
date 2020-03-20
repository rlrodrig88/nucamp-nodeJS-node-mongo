// 4 methods to insert, find, remove and update documents
const assert = require('assert').strict;

exports.insertDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection); // collection argument should be string
  coll.insertOne(document, (err, result) => {
    assert.strictEqual(err, null);
    callback(result); // deliver result to a function defined elsewhere
  });
};

exports.findDocuments = (db, collection, callback) => {
  const coll = db.collection(collection); 
  coll.find().toArray((err, docs) => {
    assert.strictEqual(err, null);
    callback(docs);
  })
};

exports.removeDocument = (db, document, collection, callback) => {
  const coll = db.collection(collection); 
  coll.deleteOne(document, (err, result) => {
    assert.strictEqual(err, null);
    callback(result);    
  });
};

exports.updateDocument = (db, document, update, collection, callback) => {
  const coll = db.collection(collection); 
  coll.updateOne(document, { $set: update }, null, (err, result) => {
    assert.strictEqual(err, null);
    callback(result);    
  });
};