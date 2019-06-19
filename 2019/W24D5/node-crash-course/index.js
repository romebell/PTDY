// console.log('Hello world');
const Person = require('./person');
// console.log(person);
// console.log(person.age);

const person1 = new Person('Rob Bell', 30);
const person2 = new Person('Asia Cormier', 29);

person1.greeting();


// console.log(person1.greeting);
// console.log(person2.greeting());

console.log('============== Logger ==============');
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called listener', data));

logger.log('Hello world');
logger.log('Hi, Rome');
logger.log('Hello');