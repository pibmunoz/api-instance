import axios from "axios";

async function getUsers() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        const users = response.data;
        const filteredUsers = filterData(users);
        console.log(filteredUsers);
    } catch (error) {
        console.error(error);
    }
}

getUsers();