/**
 * Insert data into a collection and print the number of documents inserted
 */
async function insertData(collection, data, collectionName) {
    const result = await collection.insertMany(data);
    console.info(`${result.insertedCount} documents were inserted into ${collectionName}`)
}

export default insertData;