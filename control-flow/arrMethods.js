// Array methods => map  , filter , reduce


// ############################map ##################################


let classValues = [1,2,3,4,5,6,7,8]

//created a map method using arrow function
let newClassValues = classValues.map((arr) => arr*2 ) // map method returns values 

let newClassValues1 = classValues.map( function(arr) {
    return arr*3;
}) // using a simple function

console.log("we are practicing arr map() method ");
console.log(newClassValues);
console.log(newClassValues1);

// #########################filter ########################################`

let arr = [1,2,3,4,5,6,7,8,9,10]

// let arr1 = new Array([1,2,3,4])

// console.log(typeof arr);
// console.log(typeof arr1 );


console.log("we are practicing arr filter() method ");
console.log(arr);

let  arrUsingFilter= arr.filter(  (num) => ( num >= 5) )

// let newArr = arr.filter( 
//     function (arr) {
//         return arr >=4
//     }
// )

console.log(arrUsingFilter);
// chain concept , using multiple methods one by one arr.map().fiter() .. so on 

console.log("we are practicing arr map() & filter() method in chaning concept ");
let newArr = arr.map ( (arr) =>  arr*10).map( (arr)=> arr+1).filter( (arr) =>  arr >=1 )
console.log(newArr);





//#############################reduce ####################################


