/**
 * 
 * @param {Array} data
 * @returns {Array} filteredUsers
 */
export default function filterUsers(data) {
    const usernameRegex = /([aeiou])/g;
    const filteredUsers = data.filter((user) => user.username.match(usernameRegex).length >= 3);
    return filteredUsers;
}