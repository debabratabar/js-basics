//learning DOM 

let firsth1 = document.getElementById('title')

console.log(firsth1);

// querySelector return first hit and returns 1 Object 
// querySelectorSll returns all the hit and returns a NodeList ( Not a proper Array) 

// We can transform HTMLCollection & NodeLinst into array using Array.from( HTMLCollection/ NodeList )

// different options to get the Html 
/*
1.innerHTML: returns all html nodes 
2.textContent : returns all text content
3.innerText : gives the text in the selected node
*/