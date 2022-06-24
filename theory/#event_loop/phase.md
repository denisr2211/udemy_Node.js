- инициализация

## Фазы
// nextTick, microyaskQueue
- таймеры
// microyaskQueue, nextTick
- pending callbacks
// microyaskQueue, nextTick
- idle, prepare
// microyaskQueue, nextTick
- poll
// microyaskQueue, nextTick
- check
// microyaskQueue, nextTick
- close callback

- проверка на окончание