// map, filter and reduce

// 1. what is map()
// map method is used to create a new array from the existing array by applying a function to each one of the element of first array

//The map method in JavaScript creates a new array by applying a function to each element of an existing array.

// const nums = [1, 2, 3, 4]

// const multipyThree = nums.map((num, i, arr) => {
//     return num * 3 + i 
// })

// console.log(multipyThree);


//2. What is filter()
// filter method takes each elements in an array and applies a conditional statement against it if the element is true is pushed into output array if the condition is false the element doesnt get pushed into output array

// filter returns only those element from the array which fullfil the provided criteria

const nums = [1, 2, 3, 4]

const moreThanTwo = nums.filter((num, i, arr) => {
    return num > 2;
})
console.log(moreThanTwo);