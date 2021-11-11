let date = new Date();
let year = date.getFullYear();
let number = Math.ceil(Math.random() * 31);
console.log(`Random number is ${number}`);
console.log(`This year is ${year}`);

let array = [4, 57, 3, 2, 7, 8, 26, 34, 6, 9];
array.sort((a, b) => a - b);

console.log(array);
