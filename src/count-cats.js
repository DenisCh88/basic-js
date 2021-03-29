const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let count = 0;

  for (let i = 0; i < matrix.length; i++) {
    let newMatrix = matrix[i];

    for (let i = 0; i < newMatrix.length; i++) {
      if (newMatrix[i] === '^^') {
        count++;
      }
    }
  }
  return count;
};

