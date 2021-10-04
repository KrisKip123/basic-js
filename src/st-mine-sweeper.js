import { NotImplementedError } from '../extensions/index.js';

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
export default function minesweeper (matrix) {
  let
    cloneMatrix = JSON.parse(JSON.stringify(matrix)),
    assertion = cloneMatrix.every((row) => row.every((col) => col === false));

  if (assertion) {
    for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[r].length; c++) {
        cloneMatrix[r] = Array(matrix[r].length - 1).fill(0);
        cloneMatrix[r][c] = 0
      }
    }
    return cloneMatrix;
  } else {
    for (let row = 0; row < matrix.length; row++) {
      for (let col = 0; col < matrix[row].length; col++) {
        if (matrix[row][col] === true) {
          cloneMatrix[row][col] = 1;
        }
        else {
          if (row === 0 && col === 0) {
            for (let i = 0; i <= 1; i++) {
              for (let j = 0; j <= 1; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
          if (row === 0 && col === 1) {
            for (let i = 0; i <= 1; i++) {
              for (let j = 0; j <= 2; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
          if (row === 0 && col === 2) {
            for (let i = 0; i <= 1; i++) {
              for (let j = 1; j <= 2; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
          if (row === 1 && col === 0) {
            for (let i = 0; i <= 2; i++) {
              for (let j = 0; j <= 1; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
          if (row === 1 && col === 1) {
            for (let i = 0; i <= 2; i++) {
              for (let j = 0; j <= 2; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
          if (row === 1 && col === 2) {
            for (let i = 0; i <= 2; i++) {
              for (let j = 1; j <= 2; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
          if (row === 2 && col === 0) {
            for (let i = 1; i <= 2; i++) {
              for (let j = 0; j <= 1; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
          if (row === 2 && col === 1) {
            for (let i = 1; i <= 2; i++) {
              for (let j = 0; j <= 2; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
          if (row === 2 && col === 2) {
            for (let i = 1; i <= 2; i++) {
              for (let j = 1; j <= 2; j++) {
                if (matrix[i][j] === true) {
                  cloneMatrix[row][col] = ++cloneMatrix[row][col]
                }
              }
            }
          }
        }
      }
    }
  }

  return cloneMatrix;
}
