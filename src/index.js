// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (matrix) {
        let resultArr = [];
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                resultArr = resultArr.concat(matrix[i]);
            } else if (i % 2 != 0) {
                resultArr = resultArr.concat(matrix[i].reverse());
            }
        }
        return resultArr;
    } else return [];
};
