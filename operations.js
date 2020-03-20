// 4 methods to insert, find, remove and update documents


exports.insertDocument = (db, document, collection) => {
  const coll = db.collection(collection); // collection argument should be string
  return coll.insertOne(document); // returns a promise
};

exports.findDocuments = (db, collection) => {
  const coll = db.collection(collection); 
  return coll.find().toArray()
};

exports.removeDocument = (db, document, collection) => {
  const coll = db.collection(collection); 
  return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection) => {
  const coll = db.collection(collection); 
  return coll.updateOne(document, { $set: update }, null);
};