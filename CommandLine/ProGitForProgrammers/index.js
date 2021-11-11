let date = new Date();
let year = date.getFullYear();
let number = Math.ceil(Math.random() * 31);
console.log(`Random number is ${number}`);
console.log(`This year is ${year}`);

function add(a, b) {
  return add(5, 3);
}
function subtract(a, b) {
  return b - a;
}
function multiply(a, b) {
  return a * b;
}
