var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var obj = {
    a: 1,
    b: 2,
    c: 3
}


for (var item of arr){
    console.log(item)
}
console.log('----------')
for (var item in obj){
    console.log(item)
}