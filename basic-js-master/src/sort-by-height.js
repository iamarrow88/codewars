const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let arrayLength = arr.length;
  let indexes = [];
  arr.forEach(function (elem, index) {
    if (elem !== -1) {
      indexes.push(index);
    }
    return indexes;
  });

  let elems = [];
  for (let i = 0; i < indexes.length; i++) {
    elems.push(arr[indexes[i]]);
  }
  elems.sort((a, b) => a - b);

  let res = [];
  let acc = 0;
  for (let i = 0; i < arrayLength; i++) {
    if (arr[i] === -1) {
      res.push(-1);
    } else {
      res.push(elems[acc]);
      acc += 1;
    }

  }

  return res;
}


module.exports = {
  sortByHeight
};