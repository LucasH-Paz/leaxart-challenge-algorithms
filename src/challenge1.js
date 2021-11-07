const exampleArray =  [ 'a', 10, 'b', 'hola', 122, 15];

const filterByType = (list, type) => list.filter((item) => typeof item === type);

const results = {
  numbers: filterByType(exampleArray, 'number'),
  strings: filterByType(exampleArray, 'string'),
  maxNumberValue: filterByType(exampleArray, 'number').sort((num1, num2) => num2 - num1)[0],
};
