import { NotImplementedError } from '../extensions/index.js';

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
export default function transform(arr) {
  if (arr instanceof Array === false) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }

  let cloneArray = JSON.parse(JSON.stringify(arr));

  for (let el = 0; el < arr.length; el++) {
    let index = cloneArray.indexOf(arr[el]);

    if (arr[el] === '--discard-next') {
      if (arr[el + 1] !== undefined) {
        let l = cloneArray.slice(0, index);
        l.push('');
        let r = cloneArray.slice(index + 2);
        cloneArray = l.concat(r);
      }
      else {
        cloneArray = arr.slice(0, el)
      }
    }

    if (arr[el] === '--discard-prev') {
      if (arr[el - 1] !== undefined && el !== 0) {
        let l = cloneArray.slice(0, index - 1);
        l.push('');
        let r = cloneArray.slice(index + 1);
        cloneArray = l.concat(r);
      } else {
        cloneArray = arr.slice(el + 1)
      }
    }

    if (arr[el] === '--double-next') {
      if (arr[el + 1] !== undefined) {
        let l = cloneArray.slice(0, index);
        l.push(cloneArray[index + 1]);
        let r = cloneArray.slice(index + 1);
        cloneArray = l.concat(r);
      } else {
        cloneArray = arr.slice(0, el)
      }
    }

    if (arr[el] === '--double-prev') {
      if (arr[el - 1] !== undefined) {
        let l = cloneArray.slice(0, index);
        l.push(cloneArray[index - 1])
        let r = cloneArray.slice(index + 1);
        cloneArray = l.concat(r);
      } else {
        cloneArray = arr.slice(el + 1)
      }
    }
  }
  return cloneArray.filter((el) => el !== '');
}
