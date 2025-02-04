function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Throwing an error for null inputs
  }
  return a + b;
}

console.log(foo(5, 5)); // Outputs 10
try {
  console.log(foo(null, 5)); // Throws an error
} catch (e) {
  console.error("Error:", e.message); 
}
try {
  console.log(foo(5, null)); // Throws an error
} catch (e) {
  console.error("Error:", e.message);
}
//Alternative Solution:
function foo2(a,b){
  a = a === null ? NaN : a
  b = b === null ? NaN : b
  return a + b
}
console.log(foo2(5,null)) //NaN
console.log(foo2(null,5)) //NaN