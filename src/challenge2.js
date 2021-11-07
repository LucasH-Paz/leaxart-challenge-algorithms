const operator = {
  add: (numbers) => numbers.reduce((acc, curr) => acc += curr),
  subtract: (numbers) => numbers.reduce((acc, curr) => acc -= curr),
  multiply: (numbers) => numbers.reduce((acc, curr) => acc * curr),
  divide: (num1, num2) => (num2 === 0 ? 'Its not possible to divide per 0' : (num1 / num2)),
};

// const exampleArray = [1, 2, 3];

// console.log(operator.add(exampleArray));
// console.log(operator.subtract(exampleArray));
// console.log(operator.multiply(exampleArray));
// console.log(operator.divide(1, 2));
// console.log(operator.divide(1, 0));
