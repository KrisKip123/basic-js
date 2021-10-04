import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  function cleanDuplicate(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
      if (!res.includes(arr[i])) {
        res.push(arr[i]);
      }
    }
    return res;
  }
  let
    cloneNames = names,
    cleanArr = cleanDuplicate(names)
  cleanArr.forEach((cl) => {
    let c = 0;

    for (let i = 0; i < cloneNames.length; i++) {
      if (cloneNames[i] === cl) {
        if (c > 0) {
          cloneNames[i] += `(${c})`;
        }
        c++;
      }
    }
  })

  return cloneNames;
}
