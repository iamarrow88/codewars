const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
  let arr = number.toString().split('').map(elem => parseInt(elem));
  let res;
  if (arr.length == 1) {
    return arr[0];
  } else {
    res = arr.reduce(function (acc, elem) {
      return acc + elem;
    });

    return getSumOfDigits(res);
  }

}

module.exports = {
  getSumOfDigits
};