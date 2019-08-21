
function factorial(n, memo={}) {
  if (n in memo) return memo[n];
  if (n === 1) return 1;

  memo[n] = n * factorial(n - 1);
  return memo[n];
}

console.log(factorial(7));


// Add an object called memo that will make a check to see if calculation
// exists and if not, add the calculation to the object for reference later.
// Reason for this is that the result of that operation does not change. Therefore,
// storing that in an object may be useful later.
function fibFast(n, memo={}) {
  if (n in memo) return memo[n];
  if (n === 1 || n === 2) return 1;

  memo[n] = fibFast(n - 1, memo) + fibFast(n - 2, memo);
  return memo[n];
}

// Without memoization, finding the fibonacci of 50 will take minutes to calculate.
// Changes time complexity from O(2^n) to O(n)
console.log(fibFast(50));