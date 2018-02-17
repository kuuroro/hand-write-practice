/**
 * 
 * @desc 函数防抖
 * @param {*} func 函数
 * @param {*} wait 时间
 * @param {*} immediate 是否立即执行
 * @returns
 */
function debounce(func,wait,immediate) {
    var timeout;

    return function () {
        var context = this;
        var args = arguments;

        if (timeout) clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function(){
                timeout = null;
            }, wait)
            if (callNow) func.apply(context, args)
        }
        else {
            timeout = setTimeout(function(){
                func.apply(context, args)
            }, wait);
        }
    }
}

