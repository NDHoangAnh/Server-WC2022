const { MongoClient } = require('mongodb');
const config = require('./config');

const client = new MongoClient(config.MONGODB_URL);

const connectDb = async () => {
    try {
        await client.connect();
        console.log('Connect successfully');
        // var db = client.db("Wc2022");
        // const collection = db.collection("post");
        // const cursor = collection.find({});
        // await cursor.forEach(console.log)
    } catch (error) {
        console.log(error);
        process.exit(1);
    }

}

const Data = (collectionName) => {
    const db = client.db("Wc2022");
    const collection = db.collection(collectionName);
    return {
        dbName: db,
        collectionName: collection
    }
}

module.exports = { connectDb, Data };
