const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let nums = n.toString().split('');
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    let ex = nums.slice();
    let a = ex.splice(i, 1);
    arr.push(ex.join(''));

  };

  return parseInt(arr.sort(function (a, b) {
    return b - a;
  })[0]);
}

module.exports = {
  deleteDigit
};