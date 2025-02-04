function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Incorrect handling of null values
  }
  return a + b;
}

console.log(foo(null, 5)); // Outputs 0, but should ideally throw an error or handle null differently
console.log(foo(5, null)); // Outputs 0, but should ideally throw an error or handle null differently