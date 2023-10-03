# API Instance

Node.js program that processes data from a REST API and inserts it into a MongoDB database's collections.

## First steps

1. Install the dependencies: :sparkles: `npm install` :sparkles:
2. Create a `.env` file in the root directory and add the following variables:
```
# MONGODB 🍃
MONGODB_URI=<your-mongodb-uri>
MONGODB_DB_NAME=<your-mongodb-database-name>
MONGODB_COLLECTION_NAME_1=<your-mongodb-collection-name-1>
MONGODB_COLLECTION_NAME_2=<your-mongodb-collection-name-2>

# API 🌐
API_URL_USERS=<your-api-url-users>
API_URL_COMMENTS=<your-api-url-comments>
```
3. Run the program: :sparkles: `node api/apiService.js` :sparkles:

## Testing
Tests are written using [Jest](https://jestjs.io/).
Run the tests: :sparkles: `npm run test` :sparkles:

## Planning
The planning of this project can be found [here](https://smiling-rodent-acb.notion.site/84b696850bdb4d4ab179150ac6e8067d?v=a53036e0f24b4cb7a21cf18db7c7d929&pvs=4) 


