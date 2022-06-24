const EventEmmiter = require('events'); // получаем emmiter из библиотеки events

const myEmitter = new EventEmmiter();

const logDbConnection = () => {
    console.log('DB connected');
};

myEmitter.addListener('connected', logDbConnection);
myEmitter.emit('connected');   // передаем событие подписчику


myEmitter.removeListener('connected', logDbConnection);   // удаляем события
// myEmitter.off('connected', logDbConnection);
// myEmitter.removeAllListener('connected');
myEmitter.emit('connected');

myEmitter.on('msg', (data) => {
    console.log(`Получил: ${data}`);
});
myEmitter.prependListener('msg', (data) => {    // добавляет событие в начало списка обработчика
    console.log(`Prepend`);
});
myEmitter.emit('msg', 'Привет! Получи мое сообщение');

myEmitter.once('off', () => {                         // передает событие только 1 раз
    console.log('Я вызвался 1 раз и не больше')
});
myEmitter.emit('off');
myEmitter.emit('off');

console.log(myEmitter.getMaxListeners());  // по умолчанию число лиссенеров макс 10
myEmitter.setMaxListeners(1);
console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount('msg'));
console.log(myEmitter.listenerCount('off'));
console.log(myEmitter.listeners('msg'));
console.log(myEmitter.eventNames());

myEmitter.on('error', (err) => {                          // обработчик ошибки
    console.log(`Произошла ошибка: ${err.message}`)
});

myEmitter.emit('error', new Error('BOOOM!'));




const target = new EventTarget();   // не используется для современных приложений

const logTarget = () => {
    console.log('Connected to target');
}

target.addEventListener('connected', logTarget);
target.dispatchEvent(new Event('connected'));