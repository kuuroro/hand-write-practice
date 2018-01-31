Object.CREATE= function (obj, properties) {
    function F () {}
    F.prototype = obj;
    let o = new F();
    // 注意Object.create可以传入第二个参数，是一个对象，但格式必须是Object.defineProperties()方法一样
    if (typeof properties === 'object') {
        Object.defineProperties(o, properties);
    }
    return o;
}

let e = Object.create(d, {year: {value: 2019}});
let ee = Object.CREATE(d, {year: {value: 2019}});