const { stdin,stdout } = require('process');
const readline=require('readline');
const r1=readline.createInterface(
    {
        input:stdin,
        output:stdout
    }
);
function maximum_element(nosArray){
    nosArray = nosArray.map(Number);
    max=nosArray[0];
    let length_of_array=nosArray.length;
    for(let i=1;i<length_of_array;i++){
        if (nosArray[i]>max){
            max=nosArray[i];
        }
    }
    console.log(max);
}
r1.question('enter numbers ', (input) =>
{ 
    let nosArray=input.split(" ");
    maximum_element(nosArray);
    r1.close();}
);