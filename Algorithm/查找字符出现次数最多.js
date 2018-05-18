var str = 'asdsfwetbaadfesaaadfewfaafa'

function findMost(str) {
    var arr = str.split('');
    var o = {};
    var maxCount = 0;
    var maxEle = null;
    for (var i = 0, l = arr.length; i < l; i++) {
        var a = arr[i];
        o[a] === undefined ? o[a] = 1 : (o[a]++);
        if (o[a] > maxCount) {
            maxEle = a;
            maxCount = o[a];
        }
    }
    return '最大次数的字符:' + maxEle + ' 最大次数为:' + maxCount
}

console.log(findMost(str))