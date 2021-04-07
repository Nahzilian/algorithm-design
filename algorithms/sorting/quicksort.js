/**
 * Quick sort algorithm
 * @param arr The input arr
 * @param low index the lower point
 * @param high index the higher point
*/

const quickSortHelper = (arr) => {
    quickSort(arr, 0, arr.length - 1)
}

const quickSort = (arr, low, high) => {
    if (low < high) {
        // Find the partition point
        let p = partition(arr, low, high);
        quickSort(arr, low, p - 1);
        quickSort(arr, p + 1, high)
    }
}

const partition = (arr, low, high) => {
    // Define pivot
    let pivot = arr[high];
    // Define first index  
    var i = low - 1;

    // Within the range of the low and high
    for (let j = low; j <= high - 1; j++) {
        // If numbers are smaller than pivot point, swap
        if (arr[j] < pivot) {
            i++;
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    var tempPiv = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = tempPiv;
    return (i + 1);
}



var a = [14, 13, 123,3,12,41,134,1324,564,57445,234242,34];
quickSortHelper(a);
console.log(a)