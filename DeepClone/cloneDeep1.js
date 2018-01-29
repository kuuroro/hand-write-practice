function cloneDeep1(source) {
    var target = {};
    for(var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (typeof source[key] === 'object') {
                target[key] = cloneDeep1(source[key]); 
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}

// 1、没有对传入参数进行校验，传入 null 时应该返回 null 而不是 {}

// 2、对于对象的判断逻辑不严谨，因为 typeof null === 'object'

// 3、没有考虑数组的兼容