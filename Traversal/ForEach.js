var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var obj = {
    a: 1,
    b: 2,
    c: 3
}

var result1 = arr.forEach(function(item,index){
    console.log(item,index)
});


//对象无forEach
// var result2 = obj.forEach(function(item,index){
//     console.log(item,index)
// });
console.log(result1);
// console.log(result2);