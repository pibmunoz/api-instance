import { MongoClient } from 'mongodb';
import insertData from '../../utils/insertData';

describe('insertData function', () => {
    let connection;
    let db;

    beforeAll(async () => {
        connection = await MongoClient.connect(globalThis.__MONGO_URI__);
        db = connection.db(globalThis.__MONGO_DB_NAME__);
    });

    afterAll(async () => {
        await connection.close();
    });

    it('should insert a doc into collection', async () => {
        const users = db.collection('users');

        const mockUsers = [{ _id: 'some-user-id', name: 'Doja Cat' }, { _id: 'some-user-id-2', name: 'The Weeknd' }];
        await insertData(users, mockUsers, 'users');

        const insertedUser = await users.find({}).toArray();
        expect(insertedUser).toEqual(mockUsers);
    });
});