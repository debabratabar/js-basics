//IIFE : Imediately Invoked Function Execution
// We basically use this iife when we want to run any function while defining itself , We don't need to call this function 
// when program starts it runs automatically 




let conn_details = { // declared a conn object
    dbName: 'customer',
    serverName: "127.0.0.1",
    userName: "pentaho",
    password: "pentaho",
    port: 23
};
console.log(conn_details);

// created  iife with arrow function
((conn) => {
    console.log("iife created using arrow function")
    console.log(`connected to ${conn.serverName}:${conn.port}`)
})(conn_details); // iife don't know where to stop , thats why we have to add semicolon at the end 


console.log();
console.log();
// created iife with simple function
(function (conn) {
    console.log("iife created using simple function")
    console.log(`connected to ${conn.serverName}:${conn.port}`)
})(conn_details);


// db_conn(conn_details)


// let var1 = function(){

// }

// let var2 = () => {

// }