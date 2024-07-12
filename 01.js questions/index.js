// var vs let vs const
// scope

// var a = 5
// console.log(a);

// {
//     let b = 10
//     const c = 5
// }
// console.log(b);
// console.log(c);


// VARIABLE SHADOWING

// function test() {
//     let a = "Hello"

//     if(true) {
//         let a = "Hi" // when we have same variable name block scope will shadow the global and functional scope which means it will make the outer variables unavailable for temporarily.
//         console.log(a);
//     }
//     console.log(a);
// }
// test()


// ILLIGLE SHADOWING => 
    //let can overlap var and var cant overlap let

// function test() {
//     var a = "Hello"
//     let b = "Bye"

//     if(true) {
//         let a = "Hi"
//         var b = "GoodBye"
//         console.log(a);
//         console.log(b);
//     }
//     console.log(a);
//     console.log(b);
// }
// test()


// DECLARATION

// var a; //var can redeclare
// var a;

// let a; //let, const cant be redeclare
// const a; // const have to initialize


// DECLERATION WITHOUT INITIALISATION

// var a;
// let a;
// const a = 4; // it cannot be declare without initialising


// RE-INITIALISATION

// var a = 2
// a = 2

// let a = 5
// a = 6

// const a = 4 // const cannot be updated
// a = 4


// HOISTING

// var count = undefined; it will get saved like this in creation phase

// console.log(count); // we get undefined coz we declare the var but not assign it
// var count = 1;


console.log(num);
let num = 4;