var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var obj = {
    a: 1,
    b: 2,
    c: 3
}
// 不改变原数组，返回新数组
var result1 = arr.map(function(item,index){

   return item+1
});


//对象无map

console.log(result1);