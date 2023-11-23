// two ways to define string
let str1 = 'Debabrata'
let str2 = new String("Debabrata")

console.table([str1 , typeof str1 ,  str2  , typeof str2 ])
console.log(str2);

console.log(str1.charAt(3)); // doesn't work with -ve value
console.log(str1.indexOf('f')); // its case sensitive , searches for the string and returns the first occurance , and if not found return -1

console.log(str1.toLowerCase());
console.log(str1.toUpperCase());
console.log(str1.toLocaleLowerCase());

console.log(str1.toLowerCase().concat(91)); // concating two strings

str1='    Debabrata    '
console.log(str1.length);
console.log(str1.trimStart().length); // triming begining of the string 
console.log(str1.length);
console.log(str1.trimEnd().length); // triming end of the string 
console.log(str1.length);
console.log(str1.trim().length); // triming both start & end of the string 


console.log(str1.substring(0)); // substring  end field isn't mandatory ,if you not provide the end index , it will take whole string bydefault

console.log(str1.replace('ab' , 'f')); // replaces only first occurance 
console.log(str1.replaceAll('a' , 'f'));// replaces every occurance 


console.log(str1.italics())

console.log(str1.trim().endsWith('A')); // case sensitive , checks either the string endswith certain characters , return true or false
console.log(str1.trim().startsWith('d')); // case sensitve , checks at the begining of the string 

str1 = 'Debabrata Bar'
console.log(str1.trim().at(-1));// works with -ve value , -ve index starts in reverse order
console.log(str1.trim().charAt(-1)); // doesn't work with -ve value

