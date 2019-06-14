const path = require('path'); // this is a core module. It is already included with node.

// Base file name
console.log('-------------- Base file name ----------------');
console.log(path.basename(__filename));

// Directory name
console.log('------------- Directory Name -----------------');
console.log(path.dirname(__filename));

// File extension
console.log('------------- File Extension -----------------');
console.log(path.extname(__filename));

// Create path object
console.log('----------- Create Path Object -------------------');
console.log(path.parse(__filename).base);

// Concatenate path
console.log('----------- Concatenate Path -------------------');
console.log(path.join(__dirname, 'test', 'hello.html'));