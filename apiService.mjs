import axios from "axios";
import 'dotenv/config'
import filterUsers from "./filterUsers.mjs";
import filterComments from "./filterComments.mjs";
import insertData from "./insertData.mjs";
import runDatabase from "./database.mjs";

// Run database from database.mjs
const { client, collection_1, collection_2 } = await runDatabase();

/**
 * Fetch data from API and insert it into MongoDB
 */
async function fetchData() {
    try {
        // 1. Fetch users from API and filter them by username (only if contains at least 3 vowels)
        const usersResponse = await axios.get(process.env.API_URL_USERS).then(response => response.data);
        const filteredUsers = filterUsers(usersResponse);

        // Insert data from filteredUsers into collection_1
        await insertData(collection_1, filteredUsers, process.env.MONGODB_COLLECTION_NAME_1);

        // 2. Fetch comments from API and insert them all into collection_2
        const commentsResponse = await axios.get(process.env.API_URL_COMMENTS).then(response => response.data);

        // Insert all comments into collection_2
        await insertData(collection_2, commentsResponse, process.env.MONGODB_COLLECTION_NAME_2);

    } catch (error) {
        console.error(error);
    } finally {
        // Fetch data from collection_2 and print the filtered three more frequent words from comments
        const dataFromCollection_2 = await collection_2.find({}).toArray();
        console.log(filterComments(dataFromCollection_2, 3));

        await client.close();
        console.log("Disconnected from server, bye bye!");
    }
}
fetchData();