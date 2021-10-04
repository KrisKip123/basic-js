import { NotImplementedError } from '../extensions/index.js';

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
export default function sortByHeight(arr) {
  let
    cloneArray = JSON.parse(JSON.stringify(arr)),
    arrayOfIndices = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      arrayOfIndices.push(i);
    }
  }
  cloneArray = cloneArray.filter((el) => el !== -1).sort((a, b) => a - b);

  for (let i = 0; i < arrayOfIndices.length; i++) {
    let leftSide, rightSide;

    if (arrayOfIndices[i] === 0) {
      leftSide = Array.from(-1);
      rightSide = cloneArray.slice(0);
      leftSide.unshift(-1);
    } else {
      leftSide = cloneArray.slice(0, arrayOfIndices[i]);
      rightSide = cloneArray.slice(arrayOfIndices[i]);
      rightSide.unshift(-1);
    }
    cloneArray = leftSide.concat(rightSide);
  }
  return cloneArray;
}
