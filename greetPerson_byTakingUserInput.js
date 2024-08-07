//wap to greet a person given their first name and last name
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function greetPerson(firstName, lastName) {
    let greetingMessage = `Hello, ${firstName} ${lastName}!`;
    console.log(greetingMessage);
}
rl.question('Enter your first name: ', (firstName) => {
    rl.question('Enter your last name: ', (lastName) => {
        greetPerson(firstName, lastName);
        rl.close();
    });
});