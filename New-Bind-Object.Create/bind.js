
// bind和call不同点在于：bind不执行，只返回绑定this的函数

Function.prototype.BIND = function () {
    // this指向的就是我们的函数哦
    let self = this;
    // 获取参数，由于return中的函数也有arguments, 这里需重新赋值一下
    let paras = arguments;
    return function () {
        self.call(...paras); // 不要忘记解构
    }
}


let c = {};
let cc = {};
M.BIND(c, 'haixing', 31)();
M.bind(cc, 'haixing', 31)();