import axios from "axios";
import 'dotenv/config'
import filterUsers from "./filterUsers.mjs";
import filterComments from "./filterComments.mjs";
import runDatabase from "./database.mjs";
const { client, collection_1, collection_2 } = await runDatabase();

async function getUsers() {
    try {
        const response = await axios.get(process.env.API_URL_USERS);
        const users = response.data;
        const filteredUsers = filterUsers(users);

        // Insert filteredUsers into collection_1
        const insertResult_1 = await collection_1.insertMany(filteredUsers);
        console.log(`${insertResult_1.insertedCount} documents were inserted into collection_1`);

    } catch (error) {
        console.error(error);
    } finally {
        await client.close();
        console.log("Disconnected from server, bye bye!");
    }
}

async function getComments() {
    try {
        const response = await axios.get(process.env.API_URL_COMMENTS);
        const comments = response.data;

        // Insert comments into collection_2
        const insertResult_2 = await collection_2.insertMany(comments);
        console.log(`${insertResult_2.insertedCount} documents were inserted into collection_2`);
    } catch (error) {
        console.error(error);
    } finally {
        const dataFromCollection_2 = await collection_2.find({}).toArray();
        console.log(filterComments(dataFromCollection_2, 3));
        await client.close();
        console.log("Disconnected from server, bye bye!");
    }
}

getComments();