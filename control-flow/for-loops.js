const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

const arr = [1, 2, 3, 4, 5]


//############################## for-of loop##########################

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

for (const item of map) {
    // console.log(item);
} // printing as a arr[key,value] items

for (const item of arr) {
    // console.log(item);
}

// for (const item of myObject) {
//          console.log(item); // Object isn't iterable thats why for-of loop will not work with object  
// }

//#######################for -in loop#################################
// :- we only get the keys , indexes ; we have to get the values from keys 

for (const item of map) {
    // console.log(item);
}  // map isn't iterable thats why for-in loop will not work with object  

for (const item in arr) {
    // console.log(arr[item]);
}

for (const item in myObject) {
        // console.log(myObject[item]); 
}


// ###########################forEach ##########################
// in for each we have to give  a callback function 
// arr.forEach( function (item) { // using simple function  
//     console.log(item);
// })


arr.forEach((item) => { // using arrow function
    console.log(item);
})

let sum =0
arr.forEach((item) =>{
    sum+=item
} )

console.log(`sum of [${arr}] is ${sum} `);