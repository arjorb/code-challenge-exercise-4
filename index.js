const removeDuplicates = (array) => {
    return [...new Set(array)];
  };
  
console.log(removeDuplicates([2,5,2,3]))