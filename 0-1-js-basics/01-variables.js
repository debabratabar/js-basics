const accountId = 144553
let accountEmail = "Debabrata@google.com" // alwways use let keyword 
var accountPassword = "12345" // try not to use var keyword , it has some scope issue
accountCity = "Jaipur"
let accountState;

// accountId = 2 // not allowed


accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Kharagapur"

console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState])