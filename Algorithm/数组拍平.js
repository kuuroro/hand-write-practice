
let arr = [1, 2, 3, [3, 3, 3, [5, 4, 5, 6, 6, 7, 8]],
    [333, 4444]
];

arr.join(',').split(',');

function isArray(obj) {
    return Object.prototype.toString.call(obj) === "[object Array]";
}


function flat(arr) {
    var newarr = [];
    return function flatten(arr) {
        for (let i = 0; i < arr.length; i++) {
            if (isArray(arr[i])) {
                newarr.concat(flatten(arr[i]))
            } else {
                newarr.push(arr[i]);
            }
        } (arr)
        return newarr
    }
}