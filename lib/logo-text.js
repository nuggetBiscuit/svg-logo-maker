const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      validate: promptAnswer => {
        if (promptAnswer.length < 1){
            return console.log('Please write atleast one character.');
        }
        if(promptAnswer.length >3){
            return console.log(' Max character length is 3.')
        }
        // else if(promptAnswer >=1 && promptAnswer <=3){
        //     return true;
        // }
        return true;
    }},
    {
      type: 'list',
      name: 'color',
      message: 'What is your favorite text color?',
      choices: ['Red', 'Green', 'Blue'],
    }
  ])
  .then((answers) => {
    console.log(`Hello, ${answers.name}!. And you like ${answers.color}`);
  })
  .catch((error) => {
    console.log(error);
  });
