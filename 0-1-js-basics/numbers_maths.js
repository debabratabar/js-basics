// two ways to define numbers 
let num1 =  123 
let num2 = new Number(123)

console.table([num1 , typeof num1 , num2 , typeof num2 ])

num1 = 123.6737
console.log(num1.toFixed(2)) // fixing the standard 
console.log(num1.toString()); // converts the number in string

let newNum= 1000000
console.log(newNum.toLocaleString('en-in')); //  converts in lacale string 

console.log(num1.toPrecision(6));
// toPrecision precise the number within given digits 
// 

console.log(Number.isSafeInteger(Number.MIN_SAFE_INTEGER+1));

// Number.MIN_SAFE_INTEGER // Max safe integer in Number datatype 
// Number.MAX_SAFE_INTEGER // min safe integer in Number datatype 
// Number.isSafeInteger // We can check our number is preceeding the max/min safe integer using this method




//############################# MATH #####################################

// Math object 
console.log(Math); 

console.log(Math.PI);

console.log(Math.ceil(3.1)); // nearest largest integer
console.log(Math.floor(-3.1)); // nearest smallest integer
console.log(Math.round(-3.1));

console.log(Math.abs(-5)); // its only converts -ve number to +ve 


console.log(Math.max(5,6,7,8,9));
console.log(Math.min(5,6,7,8,9));

console.log(Number.isInteger(Math.sqrt(4)));

console.log(Math.pow(-2,7));

console.log(Math.random()) // this method gives random number between 0 and 1 


let maxValue= 6;
let minValue = 1;

// we can use random function to get random numbers adding some limits 
let randomNumber = Math.round((Math.random() *( maxValue-minValue )+ 1) ); 

console.log(randomNumber);


