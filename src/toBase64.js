var fs = require('fs');
var base64;

// console.log('\n');
// base64 = fs.readFileSync('0.eot').toString('base64');
// console.log(base64);

console.log('\n');
base64 = fs.readFileSync('0.woff').toString('base64');
console.log(base64);
