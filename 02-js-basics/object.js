let obj1 = new Object(
    {
        name : "Debabrata",
        Age : 24,
        isLoogedIn : true ,
        "org Name" : "cognizant" 
    }
) // creting object using Object 

const myObj = Object.create(obj1) // we can also create object using Object.create() method

console.log(myObj.name);

console.log(obj1);
console.log(`Obj1 Age is ${obj1.Age}`);// printing object property value using string interpolation
console.log(obj1.hasOwnProperty('isLoogedIn')); // checks if the property presents in object or not 

console.log(obj1.toLocaleString());

console.log(obj1["org Name"]); // We can also print object property using []

let obj2 = new Object(
    {
      hero1 : "batman",
      hero2 : "spiderman"
    // name : "chandan",
    // Age : 34,
    // isLoogedIn : false ,
    // "org Name" : "dsp" 
    }
)
let newObj = {...obj1 , ...obj2} // using spread operator we can merge two different object
// if we are merging two obbject with same properties then it will take last object in to new object 

console.log(newObj);

newObj.hero3='ironman'
console.log(newObj);

newObj.messsage = function(){
    console.log(`${this.name} is working in ${this['org Name']} , and his age is ${this.Age} , also he has some superhero powers like ${this.hero1} , ${this.hero2} and ${this.hero3} . he is logged in the system right now` );
}

console.log(newObj.messsage());


let keysofNewObj= Object.keys(newObj); // stores all the keys in an array
let valuesOfNewObj  = Object.values(newObj) // stores all the values in an array

console.log( keysofNewObj);
console.log(valuesOfNewObj);

console.log(obj1);


const course = {
    courseName : "Js basics",
    Instructer : "Hitesh",
    place : "youtube"
}

let {courseName:val1 , Instructer : val2 , place: val3} = course // destructuring the object values

let arr =[1,2,3,4]

let [a , b] = arr // destructuring arrays value 

console.log(`${val1} , ${val2} ,${val3} `); // printing the destructured value from object 

console.log(`${a} , ${b} `); 