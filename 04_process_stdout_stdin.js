// RUN THIS FILE LIEK THIS
// node 04_process_stdout_stdin

const questions = [
  "What is your name?",
  "What would you rather be doing?",
  "What is your preferred language?"
];
const answers = [];

const askQuestion = (index = 0) => {
  process.stdout.write(`\n\n\n ${questions[index]}`);
  process.stdout.write(` > `);
}
askQuestion();


process.stdin.on('data', data => {
  answers.push(data.toString().trim());

  if (questions.length > answers.length) {
    askQuestion(answers.length);
  }
  else {  
    process.exit();
  }
})

process.on('exit', () => {
  const [name,activity,prefLanguage] = answers;
  console.log(`
Thank you for your answers.

Go ${activity} ${name} you can write ${prefLanguage} code later !!


  `);
})