// CommonJS

const users = ['Антон' , 'Вася'];

function greet(name) {
    console.log(`Привет ${name}`);
}

module.exports = {users, greet};  // что модуль экспортирует