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


// promise Example 3 

let promiseThree = new Promise( (resolve , reject)=>{
    setTimeout( () =>{
        console.log("I am in promiseThree");
        let state = false
        if ( state){
        resolve({user:"debabratabar" , repoCount: 17}) // passing value when Promise resolved  
        }
        else{
            reject('404 !! Not Found') // passing value when Promise rejected 
        }
    } ,  2000)
})

promiseThree.then((user) => {
    console.log(`UserName : ${user.user} , RepoCount = ${user.repoCount}`);
}).catch((errData) => {
    console.log(errData);
})


// Promise Example 4 


let promiceArr = [promiseThree , promiceOne]
 
Promise.all(promiceArr) // it takes a arr of promises and returnes a promise and it rejects if any of 
.then(() => {            // the promises rejects , if all the iterable promises resolved , then it resolved 
        // console.log(promiceOne.state);
        // console.log(promiseThree.state);
})
.catch( (error) => {
    console.log("Error");
    // process.on('unhandledRejection' , (reason, promise) =>  {
    //     console.error(`Rejected Promise : ${promise}` );
    // })
    console.log(error);
})