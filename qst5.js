
var readlinesync = require('readline-sync');
let number = parseInt(readlinesync.question('enter no of elements ='));
let array=[];
    for(let i = 0;i < number; i++){
        array[i]=parseInt(readlinesync.question('enter ' +i+'th element ='));
}
console.log("the array =",array);
let even=0;
for(i=0;i<=number;i++){
    if(array[i] % 2 === 0){
        even ++ ;
    }
}
console.log("Number of even numbers in the given array is :",even);