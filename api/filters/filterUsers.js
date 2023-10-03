/**
 * Filters users by username to only include users with at least 3 vowels
 * @param {Array} data
 * @returns {Array} filteredUsers
 */
function filterUsers(data) {
    const usernameRegex = /([aeiou])/g;
    const filteredUsers = data.filter((user) => user.username.match(usernameRegex).length >= 3);
    return filteredUsers;
}

export default filterUsers;