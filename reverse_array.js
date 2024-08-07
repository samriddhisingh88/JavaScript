const {stdin,stdout}=require('process');
const readline=require('readline');
const r1=readline.createInterface(
    {
        input: stdin,
        output:stdout
    }
);
function reverseArray(nosArray,first,last){
    nosArray=nosArray.map(Number);
    while(first<last){
        var temp=nosArray[first];
        nosArray[first]=nosArray[last];
        nosArray[last]=temp;
        first++; last--;
    }
    nosArray=nosArray.join(" ");
    console.log(nosArray);
}
r1.question('enter the nos ',(input)=> {
    nosArray=input.split(" ");
    const n=nosArray.length;
    reverseArray(nosArray,0,n-1);
    r1.close;
}
);
