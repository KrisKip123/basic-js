import { NotImplementedError } from '../extensions/index.js';

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
export default function getCommonCharacterCount(s1, s2) {
  let c = 0;

  s1 = s1.split('');
  s2 = s2.split('');

  return helper(s1);
  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < s2.length; j++) {
        if (arr[i] === s2[j]) {
          c++;
          arr.splice(i, 1);
          s2.splice(j, 1);
          return helper(arr);
        }
      }
    }
    return c;
  }
}
