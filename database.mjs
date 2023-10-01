import { MongoClient } from "mongodb";
import 'dotenv/config'

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri);

const dbName = process.env.MONGODB_DB_NAME;

const collectionName_1 = process.env.MONGODB_COLLECTION_NAME_1;
const collectionName_2 = process.env.MONGODB_COLLECTION_NAME_2;

async function runDatabase() {
    await client.connect();
    console.log("Connected successfully to server :D!");
    const db = client.db(dbName);
    const collection_1 = db.collection(collectionName_1);
    const collection_2 = db.collection(collectionName_2);
    return { client, collection_1, collection_2 };
}

export default runDatabase;