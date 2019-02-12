var arr = [1, 2, 3, 4, 5, 4, 3, 2, 1];

var obj = {
    a: 1,
    b: 2,
    c: 3
}

// 存在一个true，就返回true
var result1 = arr.some(function(item,index){
   return item>3
});


//对象无some
console.log(result1);