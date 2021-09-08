const path = require('path');

//1
console.log("\n__dirname\n", __dirname);
console.log("\n__filename\n", __filename);

//2
console.log(`\nThe directory name is \n${path.basename(__dirname)}`);
console.log(`\nThe file name is \n${path.basename(__filename)}`);

//LAST
console.log("\n");