import axios from "axios";
import 'dotenv/config'
import filterData from "./filterData.mjs";
import runDatabase from "./database.mjs";
const { client, collection_1 } = await runDatabase();

async function getUsers() {
    try {
        const response = await axios.get(process.env.API_URL_USERS);
        const users = response.data;
        const filteredUsers = filterData(users);

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

getUsers();