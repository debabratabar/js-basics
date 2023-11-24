// this keyword define the current context 


let book= {
    name : "Ikigai",
    category : "comedy" ,

    context : function(){
        console.log(this) // its showing what is the current context its referring
        console.log(`${this.name} is a funny book` ) // here this is refering the object books properties 
    }
}

book.context()
book.name="bookNo1" // we changes the value for name 
book.context()



console.log(this)
/* browser console & node has different global context , 
in brower console there is a lot of properties which are there previously ,
but in node env, there is no global context .
*/

// arrow function 
/* its a different representation of function, its used to reduce the code
and gives a better straight-forward representation of function 
this func has many use cases in React
*/
let addTwo= (num1 , num2 ) => { return num1+num2}
let add2= (num1 , num2 ) => (num1 + num2) // if we use () , then we don't need to add return keyword


// returning object in arrow func

let addObj =() => ( {Name : 'obj1'})


console.log(addTwo(1,2))
console.log(add2(1,2));
console.log(addObj())

console.log(this)
