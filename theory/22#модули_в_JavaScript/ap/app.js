// CommonJS

const {greet, users} = require('./test.js');  // ключевое слово подключения

for (const user of users) {
    greet(user);
}