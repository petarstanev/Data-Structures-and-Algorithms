var unorderedArray = [6, 5, 3, 1, 8, 7, 2, 4];

function selectionSort(data) {
    for (let i = 0; i < data.length; i++) {
        smallestNumberIndex = i;
        for (let n = i + 1; n < data.length; n++) {
            if (data[n] < data[smallestNumberIndex]) {
                smallestNumberIndex = n;
            }
        }
        let temp = data[i];
        data[i] = data[smallestNumberIndex];
        data[smallestNumberIndex] = temp;
    }

    return data;
}

console.log(selectionSort(unorderedArray));