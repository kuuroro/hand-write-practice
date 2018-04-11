function maxAndMin(arr) {
    return {
        max: Math.max.apply(null, arr.join(',').split(',')),
        min: Math.min.apply(null, arr.join(',').split(','))
    }
}