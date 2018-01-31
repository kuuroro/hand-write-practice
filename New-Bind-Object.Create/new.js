function NEW(){
    // 获取参数
    let func = arguments[0]; // 构造函数
    let paras = [].slice.call(arguments,1); // 传入的参数
    // 继承func.prototype的属性
    let o = Object.create(func.prototype);
    // 继承构造函数中的属性
    func.call(o,paras);
    return o;
}

function M (name, age) {
    this.name = name;
    this.age = age;
}

M.prototype.sayYear = () => {
    console.log('2018');
}

let m = NEW(M, 'haixing', 30); 
let mm = new M('haixing', 30);