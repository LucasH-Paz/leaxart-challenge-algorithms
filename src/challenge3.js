const character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split('');
const numberOfOptions = character.length;

const getRandomPosition = () => parseInt(Math.random() * numberOfOptions);

const generateKey = (numberOfBlocks, blockSize) => {
  let result = '';

  for(let block = 1; block <= numberOfBlocks; block += 1) {
    for(let value = 1; value <= blockSize; value += 1) {
      result += character[getRandomPosition()]
    };
    block === numberOfBlocks ? null : result += '-';
  };

  return result;
};

// console.log(generateKey(4, 5));
