var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var obj = {
    a: 1,
    b: 2,
    c: 3
}

for (var key in arr) {
    console.log(key, arr[key])
}

console.log('----------');

for (var key in obj) {
    console.log(key, obj[key])
}