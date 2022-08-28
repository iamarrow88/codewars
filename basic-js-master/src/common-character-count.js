const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  
  const arr1 = s1.split('');
  const arr2 = s2.split('');

  const obj1 = arr1.reduce((acc, el) => {
    if(acc[el]) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  console.log(obj1);
  const obj2 = arr2.reduce((acc, el) => {
    if(acc[el]) {
      acc[el] += 1;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  

  const keysArray1 = Object.keys(obj1);
  const keysArray2 = Object.keys(obj2);


  keysArray2.forEach((el) =>{
    if(!keysArray1.includes(el)) {
      keysArray1.push(el);
    }
  })
  
  let resArr = [];
  keysArray1.forEach((el) => {
    let res;
    if(obj1[el] && obj2[el]) {
      obj1[el] >= obj2[el] ? res = obj2[el] : res = obj1[el];
      resArr.push(res);
    }
    
  })

  const res = resArr.reduce((acc, el) => {
    return acc + el;
  })
  
  return res;

}

console.log(getCommonCharacterCount('aabcc', 'adcaa'))

module.exports = {
  getCommonCharacterCount
};
