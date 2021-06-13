const bcrypt = require('./helpers/bcrypt');

async function test() {
    const testHash = await bcrypt.hashPassword('testing');
    console.log(`testhash: ${testHash}`);
    console.log(await bcrypt.verifyHash('testing', testHash));
}

test();