const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  let controlSequences = ['--discard-next', '--double-next', '--discard-prev', '--double-prev'];
  
  if(!Array.isArray(arr)) {
    throw new Error ("'arr' parameter must be an instance of the Array!");
  }
  
  if (arr.length === 0) {
    return [];
  }
  
  let newArray = arr.slice();
  
  function discardNext (newArray, index){
    if (newArray[index + 1] !== 'undefined') {
      newArray.splice(index + 1, 1);
      }
      newArray.splice(index, 1);
      return newArray;
    }
    
    function doubleNext (newArray, index){
    if (newArray[index + 1] !== 'undefined') {
      newArray[index] = newArray[index + 1];
      } else {
      newArray.splice(index, 1);
      }
      return newArray;
    }
    
    function discardPrev (newArray, index){
      newArray.splice(index, 1);
    if (newArray[index - 1] !== 'undefined') {
      newArray.splice(index - 1, 1);
      }
      
      return newArray;
    }
    
    function doublePrev (newArray, index){
     if (newArray[index - 1] !== 'undefined') {
      newArray[index] = newArray[index - 1];
      } else {
      newArray.splice(index, 1);
      }
      return newArray;
    }
  
  
  for (let i = 0; i < arr.length; i ++){
    if (arr[i] === controlSequences[0]) {
      discardNext (newArray, i);
  } else if (arr[i] === controlSequences[1]) {
      doubleNext (newArray, i);
  } else if (arr[i] === controlSequences[2]) {
      discardPrev (newArray, i);
  } else if (arr[i] === controlSequences[3]) {
      doublePrev (newArray, i);
  }
  };
  
 
  
  return newArray;
}

console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]));


module.exports = {
  transform
};
