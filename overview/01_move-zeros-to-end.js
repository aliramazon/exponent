/* 
Move all zeros to the end of an array while maintaining the order of the other elements. Given an array of integers, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.

Constraints
You must do this in-place without making a copy of the array.
Minimize the total number of operations.

Examples
arr = [0, 1, 0, 3, 12]
output: [1, 3, 12, 0, 0]

arr = [1, 2, 0, 4, 3, 0, 5, 0]
output: [1, 2, 4, 3, 5, 0, 0, 0]
arr = [1]
output: [1]

arr = [0, 0, 1]
output: [1, 0, 0]
*/

const moveZerosToEndV1 = (array) => {
    if (array.length <= 1) return array;
    let firstZeroPos = undefined;

    for (let i = 0; i < array.length; i++) {
        if (!array[i] && firstZeroPos === undefined) {
            firstZeroPos = i;
        } else if (array[i] && (firstZeroPos || firstZeroPos === 0)) {
            array[firstZeroPos] = array[i];
            array[i] = 0;

            firstZeroPos++;
        }
    }

    return array;
};

const moveZerosToEndV2 = (array) => {
    let insertPos = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i]) {
            array[insertPos++] = array[i];
        }
    }

    while (insertPos < array.length) {
        array[insertPos++] = 0;
        insertPos++;
    }
    return array;
};

console.log(moveZerosToEndV1([0, 1, 0, 3, 12]));
console.log(moveZerosToEndV1([1, 2, 0, 4, 3, 0, 5, 0]));
console.log(moveZerosToEndV1([0, 0, 1]));
