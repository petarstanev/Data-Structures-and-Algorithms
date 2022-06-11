// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
const numbers = [40, 20, 60, 10, 50, 30];

function mergeSort(array) {// O(n log n)
    console.log("mergeSort - array - " + array);

    if (array.length === 1) {
        return array
    }
    // Split Array in into right and left

    const middleIndex = Math.floor(array.length / 2);
    const left = array.slice(0, middleIndex);
    const right = array.slice(middleIndex);

    return merge(
        mergeSort(left),
        mergeSort(right)
    )
}

function merge(left, right) {
    console.log("MERGE - left - " + left + " right - " + right);
    var leftIndex = 0;
    var rightIndex = 0;
    var result = [];
    while (left.length > leftIndex || right.length > rightIndex) {
        if (left.length === leftIndex) {
            result.push(right[rightIndex]);
            rightIndex++;
        } else if (right.length === rightIndex) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex++;
            } else {
                result.push(right[rightIndex]);
                rightIndex++;
            }
        }
    }

    return result;
}


const answer = mergeSort(numbers);
console.log(answer);