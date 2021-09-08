// RUN THIS FILE LIEK THIS
// node 03_global_process2 --greeting "Tanti saluti a" --user "Jacopo Marrone"

const grab = flag => {
  let indexAfterFlag = process.argv.indexOf(flag) +1;
  return process.argv[indexAfterFlag];
}
const greeting = grab("--greeting");
const user = grab("--user");
console.log(`\n${greeting} ${user}`);

console.log("\n")