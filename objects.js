const allUsers=[
{
    firstName: "Samriddhi",
    gender: "female",
    age: 21
},
{
    firstName: "Kyra",
    gender: "female",
    age: 28
},
{
    firstName: "Casper",
    gender: "male",
    age: 18
}
];
for(let i=0;i<allUsers.length;i++){
    if (allUsers[i]["gender"]==="male"){
        console.log(allUsers[i]["firstName"]);
    }
}