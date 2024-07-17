
/*

getName() // js
console.log(x); // undefined
console.log(getName); // shows function defination
console.log(getName2); // shows undefined like variables
console.log(getName3); // shows undefined like variables


var x = 7;  // if comment this answer will be not defined

// function
function getName() {
    console.log("js");
} 

// arrow function
var getName2 = () => {
    console.log("js");
}  // it will be undefined like variable 

// function is save in variable
var getName3 = function () {
    console.log("js");
}

*/

// call stack
var x = 7
function getName () {
    console.log("js");
}
getName()
console.log(x);
console.log(getName);