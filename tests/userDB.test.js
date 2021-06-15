const users = require('../db_helpers/users_table');

afterAll(async () => {
   return await users.truncateTable();
});