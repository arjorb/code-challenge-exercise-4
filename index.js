const convertToBinary = (number) => {
    if (number === 0) return '0';
    return number.toString(2);
  };

console.log(convertToBinary(30))