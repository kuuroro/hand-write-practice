var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var obj = {
    a: 1,
    b: 2,
    c: 3
}

// 返回一个符合条件的新数组
var result1 = arr.filter(function(item,index){
   return item>3
});


//对象无filter
console.log(result1);