import filterUsers from '../../../api/filters/filterUsers.js';

it('should filter users with usernames containing at least 3 vowels', () => {
    const data = [
        { username: 'kali.uchis' },
        { username: 'ash.nikko' },
        { username: 'ji.hyo' },
    ];

    const expectedFilteredUsers = [
        { username: 'kali.uchis' },
        { username: 'ash.nikko' },
    ];

    const filteredUsers = filterUsers(data);

    expect(filteredUsers).toStrictEqual(expectedFilteredUsers);
});