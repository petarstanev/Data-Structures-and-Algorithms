// Merge sorted arrays
// Given [0,3,4,31], [4,6,30] should be:
// [0,3,4,4,6,30,31]

function mergeSortedArrays(input1, input2) {
    let counter1 = 0;
    let counter2 = 0;
    let result = [];

    while (counter1 < input1.length || counter2 < input2.length) {
        if (counter2 == input2.length || input1[counter1] < input2[counter2]) {
            result.push(input1[counter1++]);
        } else {
            result.push(input2[counter2++]);
        }
    }

    return result;
}

console.log(mergeSortedArrays([0, 3, 4, 31], [4, 6, 30]));