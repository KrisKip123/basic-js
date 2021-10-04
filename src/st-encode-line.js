import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  if (str === '') {
    return '';
  }

  let prev = str[0],
    c = 0,
    output = '';
  for (let i = 0; i < str.length; i++) {

    if (str[i] !== prev) {

      if (c === 1) {
        output += `${prev}`;
      } else {
        output += `${c}${prev}`;
      }
      c = 1;
      prev = str[i];
    } else {
      c++;
    }

  }

  if (c === 1) {
    return output += `${prev}`;
  } else {
    return output += `${c}${prev}`;
  }
}
