function fibonacci(n) {
    if (n < 2) {
      return n;
    } else {
      return fibonacci(n - 1) + fibonacci(n - 2);
    }
  }
  function printFibonacciSequence(n) {
    for (let i = 0; i < n; i++) {
      console.log(fibonacci(i));
    }
  }
  printFibonacciSequence(10);