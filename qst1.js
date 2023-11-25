let readlineSync = require('readline-sync');

let num=parseInt(readlineSync.question('Enter your number : '));

for(let i=1; i<=10; i++){
    console.log(num,"*",i,"=",num*i ) ;
}