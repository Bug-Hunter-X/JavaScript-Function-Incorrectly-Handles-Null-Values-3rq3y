# JavaScript Function Null Handling Bug

This repository demonstrates a common bug in JavaScript functions where null values are not correctly handled.  The `foo` function adds two numbers, but it incorrectly returns 0 if either input is null.  A more robust solution should either throw an error or return a meaningful result (e.g., NaN) to indicate an invalid input.

## Bug Report

The `bug.js` file contains the buggy implementation.  The function `foo` fails to handle null values properly, returning 0 regardless of the null value. This behavior might lead to unexpected results and can be difficult to debug.

## Solution

The `bugSolution.js` file provides a corrected version of the function.  This improved version handles null values explicitly, either by throwing an error or returning a value that clearly indicates an error condition.

This demonstrates the importance of careful null handling in JavaScript to avoid unexpected behavior and enhance code robustness.