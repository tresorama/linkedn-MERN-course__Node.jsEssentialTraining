// RUN THIS FILE LIEK THIS
// node 02_global_process Jacopo Marrone


//1
console.log(`\nprocess.pid \n${process.pid}`);
console.log(`\nprocess.versions.node \n${process.versions.node}`);
console.log(`\nprocess.argv`);
console.log(process.argv);

//2
const [,,firstName,lastName] = process.argv;
console.log(`Your name is ${firstName} ${lastName}`);

console.log("\n")