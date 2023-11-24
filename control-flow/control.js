// ternary operator ( condition? true : false )-- equivalent of if-else

let isLoggedIn = false

isLoggedIn ? console.log("user is Logged In"): console.log("User isn't logged in");


// Nullish coalseacing operator ??
// its worked only for null & undefined vale 


let val1 

// val1 = undefined ?? 10//undefined case
val1 = null ?? 10//null case // null case


console.log(val1);


// truthsy & falsy values details 

// falsy values 

// false ,0 , -0 ,-0n , "" , null , undefined  , NaN

// truthsy values 
// [] , {} , "0" , "false" 

// to check the empty array or object we can folloe below 

// array 

if ([].length=== 0){

}

// object

if(Object.keys({}).length===0){
    
}