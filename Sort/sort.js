var arr0 = [9, 39, 68, 1, 6, 25, 98, 3, 15, 78, 55, 43, 66, 8, 89, 92];
var arr1 = [9, 39, 68, 1, 6, 25, 98, 3, 15, 78, 55, 43, 66, 8, 89, 92];
var arr2 = [9, 39, 68, 1, 6, 25, 98, 3, 15, 78, 55, 43, 66, 8, 89, 92];

function bubbleSort(arr) {
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        for (var j = 0; j < len - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {        //相邻元素两两对比
                var temp = arr[j + 1];        //元素交换
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}

console.log('bubble-sort', bubbleSort(arr0))

function quickSort(arr, left, right) {
    var len = arr.length,
        partitionIndex,
        left = typeof left != 'number' ? 0 : left,
        right = typeof right != 'number' ? len - 1 : right;

    if (left < right) {
        partitionIndex = partition(arr, left, right);
        quickSort(arr, left, partitionIndex - 1);
        quickSort(arr, partitionIndex + 1, right);
    }
    return arr;
}


function partition(arr, left, right) {     //分区操作
    var pivot = left,                      //设定基准值（pivot）
        index = pivot + 1;
    for (var i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++;
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

function swap(arr, i, j) {//交换位置
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}


console.log('quickSort', quickSort(arr1))