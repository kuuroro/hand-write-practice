var arr = [2, 8, 5, 0, 5, 2, 6, 7, 2];









/**
 * Object的key值不重复的原理去重
 *
 * @param {*} arr
 * @returns
 */
function unique(arr) {
    let hashTable = {};
    let data = [];
    for (let i = 0, l = arr.length; i < l; i++) {
        if (!hashTable[arr[i]]) {
            hashTable[arr[i]] = true;
            data.push(arr[i]);
        }
    }
    return data
}




/**
 *
 * 循环indexof的方法
 * @param {*} arr
 * @returns
 */
function unique1(arr) {
    var hash = [];
    for (var i = 0; i < arr.length; i++) {
        if (hash.indexOf(arr[i]) == -1) {
            hash.push(arr[i]);
        }
    }
    return hash;
}




/**
 *下标判断法
 *
 * @param {*} arr
 * @returns
 */
function unique2(arr) {
    var hash = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr.indexOf(arr[i]) == i) {
            hash.push(arr[i]);
        }
    }
    return hash;
}




/**
 * 排序后，相邻去重
 *
 * @param {*} arr
 * @returns
 */
function unique3(arr) {
    arr.sort();
    var hash = [arr[0]];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] != hash[hash.length - 1]) {
            hash.push(arr[i]);
        }
    }
    return hash;
}




/**
 * 优化(双循环去重)
 *
 * @param {*} arr
 * @returns
 */
function unique4(arr) {
    var hash = [];
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) {
                ++i;
            }
        }
        hash.push(arr[i]);
    }
    return hash;
}


/**
 * ES6的 Set来去重
 *
 * @param {*} arr
 * @returns
 */
function unique5(arr) {
    var x = new Set(arr);
    return [...x];
}