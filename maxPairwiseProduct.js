//gets the maximum product that can be achieved between 2 numbers inside an array

function max(arr) {
    let maxNumber = 0;
    let secondMaxNumber = 0;
    for (let a = 0; a < arr.length; a++) {
        if (arr[a] > maxNumber) {
            maxNumber = arr[a];
        }
    }
    for (let b = 0; b < arr.length; b++) {
        if (arr[b] == maxNumber) {
            continue;
        } else if (arr[b] > secondMaxNumber) {
            secondMaxNumber = arr[b];
        }
    }
    return maxNumber * secondMaxNumber;
};
