console.log('============== Person =============');
const Person = require('./person');
// console.log(person);
// console.log(person.age);

const person1 = new Person('Rob Bell', 30);
const person2 = new Person('Asia Cormier', 29);

person1.greeting();
// console.log(person1.greeting);
// console.log(person2.greeting());

// Logger
console.log('============== Logger ==============');
const Logger = require('./logger');

const logger = new Logger();

logger.on('message', (data) => console.log('Called listener', data));

logger.log('Hello world');
logger.log('Hi, Rome');
logger.log('Hello');

console.log('========================================');

// Web Server 
console.log('Make a web server w/out express loading basic webpages');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });
  }  else if(req.url === '/about') {
    fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
      if(err) throw err;
      res.writeHead(200, { 'Content-Type': 'text/html'});
      res.end(content);
    });
  }
  
  // if (req.url === '/') {
  //   res.writeHead(200, {'Content-Type': 'text/html'});
  //   res.end('<h1>Home Rome</h1>');
  // }
  // console.log(req.url);
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, console.log(`Server is listening on port ${PORT}`));