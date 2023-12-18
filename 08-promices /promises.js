// promise example 1 

let promiceOne = new Promise((resolve, reject) => {// using functions 
    console.log("I am in promice ");
    let errStat = false

    if (!errStat) {
        resolve()
    }
    else {
        reject("Error!! We got")
    }

})

promiceOne
.then(() => { console.log(promiceOne); })
.catch((error) => console.log(error))


// promise Example 2 :

new Promise((resolve, reject) => {
    console.log("I am in promice ");
    let errStat = true

    if (!errStat) {
        resolve()
    }
    else {
        reject("Error!! We got")
    }

})
.then(() => { console.log("I am in reolve part"); })  // using direct then & catch options 
.catch((error) => console.log(error))

