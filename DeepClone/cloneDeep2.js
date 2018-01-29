function isObject(obj) {
	return typeof obj === 'object' && obj != null;
}



function cloneDeep2(source) {

    if (!isObject(source)) return source; // 非对象返回自身
      
    var target = Array.isArray(source) ? [] : {};
    for(var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
            if (isObject(source[key])) {
                target[key] = cloneDeep2(source[key]); // 注意这里
            } else {
                target[key] = source[key];
            }
        }
    }
    return target;
}


/**如果发现个新对象就把这个对象和他的拷贝存下来，每次拷贝对象前，都先看一下这个对
 * 象是不是已经拷贝过了，如果拷贝过了，就不需要拷贝了，直接用原来的，这样就能够保留引用关系了 */

/**引入一个数组uniqueList用来存储已经拷贝的数组，每次循环遍历时，
* 先判断对象是否在uniqueList中了，如果在的话就不执行拷贝逻辑了*/