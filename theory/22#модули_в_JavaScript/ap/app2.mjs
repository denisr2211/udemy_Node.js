// ES Modules

import {users, greet} from './test2.mjs'      // ключевое слово для импорта

for (const user of users) {
    greet(user);
}