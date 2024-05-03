import inquirer from 'inquirer';
import chalk from 'chalk';
async function getSelfIntroduction() {
    const questions = [
        {
            type: 'input',
            name: 'name',
            message: 'Enter your name:',
            validate: (input) => {
                return isNaN(Number(input)) ? true : 'Name should not contain numbers';
            },
        },
        {
            type: 'input',
            name: 'age',
            message: 'Enter your age:',
            validate: (input) => {
                return !isNaN(Number(input)) ? true : 'Age should be a number';
            },
        },
        {
            type: 'input',
            name: 'gender',
            message: 'Enter your gender:',
        },
        {
            type: 'input',
            name: 'address',
            message: 'Enter your address:',
        },
        {
            type: 'input',
            name: 'phone',
            message: 'Enter your phone number:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
        },
    ];
    const answers = await inquirer.prompt(questions);
    const selfIntroduction = `
        ${chalk.bold.green('Self Introduction')}
        ${chalk.yellow('Name:')} ${answers.name}
        ${chalk.yellow('Age:')} ${answers.age}
        ${chalk.yellow('Gender:')} ${answers.gender}
        ${chalk.yellow('Address:')} ${answers.address}
        ${chalk.yellow('Phone:')} ${answers.phone}
        ${chalk.yellow('Email:')} ${answers.email}
    `;
    console.log(selfIntroduction);
}
getSelfIntroduction();
