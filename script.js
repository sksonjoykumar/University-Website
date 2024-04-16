// var createCounter = function (init) {
//   let count = init;
//   function increment() {
//     return ++count;
//   }
//   function decrement() {
//     return --count;
//   }
//   function reset() {
//     return (count = init);
//   }
//   return { increment, decrement, reset };
// };

// const counter = createCounter(5);
// counter.increment();
// counter.decrement();
// counter.reset();

// var map = function (arr, fn) {
//   const transformArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     transformArr[i] = fn(arr[i], i);
//   }
//   return transformArr;
// };
// function plusone(n) {
//   return n + 1;
// }
// let arr = [1, 2, 3];
// const newArray = map(arr, plusone);
// console.log(newArray);
