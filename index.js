const sumRecursive = (array) => array.length === 0 ? 0 : array[0] + sumRecursive(array.slice(1));
  
console.log(sumRecursive([2, 2, 3, 4, 5]))
  