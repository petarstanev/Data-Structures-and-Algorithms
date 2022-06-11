var unorderedArray = [6, 5, 3, 1, 8, 7, 2, 4];

function bubbleSort(data) { // O(2^n)
    for (let i = 0; i < data.length - 1; i++) {
        for (let n = 0; n < data.length - i; n++) {
            if (data[n] > data[n + 1]) {
                let temp = data[n];
                data[n] = data[n + 1];
                data[n + 1] = temp;
            }
        }
    }

    return data;
}

console.log(bubbleSort(unorderedArray));