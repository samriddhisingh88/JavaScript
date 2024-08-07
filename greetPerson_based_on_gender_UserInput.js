const readline = require('readline');
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function greetPerson(Name,age){
    let ageMsg;
    if (age<21){
         ageMsg="You are underage";}
    else{
         ageMsg="You are legal";
    }
    let greetingMessage=`Namaste, ${Name} ${ageMsg}`;
    console.log(greetingMessage);
}
 r1.question('Enter your Name: ',(Name) => {
    r1.question('Enter your age: ',(age) => {
        greetPerson(Name, age);
        r1.close();
    });
 });