let readlineSync = require('readline-sync');

let mark=parseInt(readlineSync.question('Enter your mark : '));

if(mark>=90){
    console.log('A');
}
else if(mark>=80){
    console.log('B');
}
else if(mark>=70){
    console.log('C');
}
else if(mark>=60){
    console.log('D');
}
else if(mark>=50){
    console.log('E');
}
else{
    console.log('Failed');
}