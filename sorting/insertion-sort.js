const unorderedArray = [6, 5, 3, 1, 8, 7, 2, 4];

function insertionSort(unorderedArray) {
    // var sortedArray = [];

    for (let i = 1; i < unorderedArray.length; i++) {
        var n = i;
        while (unorderedArray[n] < unorderedArray[n - 1]) {
            let temp = unorderedArray[n - 1];
            unorderedArray[n - 1] = unorderedArray[n];
            unorderedArray[n] = temp;
            n--;
        }
    }
    return unorderedArray;
}

console.log(insertionSort(unorderedArray));