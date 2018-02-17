function PromiseA(executor) {
    // 前置判断
    if (!(this instanceof PromiseA)) {
        throw 'PromiseA is a constructor and should be called width "new" keyword';
    }
    if (typeof executor !== 'function') {
        throw 'PromiseA params must be a function';
    }


    // 缓存then
    this.thenCache = []; //{resolve:,reject:}
    // 报错
    this.errorHandle = null;
    // promise的状态
    this.status = 'pendding';
    this.value = null;
    this.rejectReason = null;
    var self = this;

    // 而executor函数如果在promise里直接调会比then函数先执行，
    // 如果executor是同步操作，那么Promise的resolve或reject方法会在then前面执行，而then此时还没做
    // 好缓存onFulfilled 或 onRejected任务Promise就开始按顺序调用onFulfilled 或 onRejected必然会出错。

    // !!!需要setTimeOut一下，慢于then函数执行
    setTimeout(function () {
        try {
            executor.call(self, self.resolve.bind(self), self.reject.bind(self)); //传递resolve，reject方法
        } catch (e) {
            self.reject(e);
        }
    }, 0);
    return this;
}


PromiseA.prototype.resolve = function (value) {
    //   修改状态
    this.status = 'resolved';
    // 缓存代理的值
    this.value = value;
    this.triggerThen();
};

PromiseA.prototype.reject = function (reason) {
    //   修改状态
    this.status = 'rejected';
    //缓存失败原因
    this.rejectReason = reason;
    this.triggerThen();
};



// promise/A＋规范提出通过then方法访问当前Promise的代理值，
//并且可被同一个promise调用多次，最后函数返回promise对象,所以then函数：   
PromiseA.prototype.then = function (resolve, reject) {
    var todo = {
        resolve: resolve,
        reject: reject
    };
    this.thenCache.push(todo);
    return this;
};



// 触发then的执行
PromiseA.prototype.triggerThen = function () {
    // 取队列的then
    var current = this.thenCache.shift();
    var res = null;

    if (!current && this.status === 'resolved') { //成功解析并读取完then cache
        return this;
    } else if (!current && this.status === 'rejected') { //解析失败并读取完then cache，直接调用errorHandle
        if (this.errorHandle) {
            this.value = this.errorHandle.call(undefined, this.rejectReason);
            this.status = 'resolved';
        }
        return this;
    };

    if (this.status === 'resolved') {
        res = current.resolve;
    } else if (this.status === 'rejected') {
        res = current.reject;
    }

    if (typeof res === 'function') {
        try {
            this.value = res.call(undefined, this.value || this.rejectReason); //重置promise的value
            this.status = 'resolved';
            this.triggerThen(); //继续执行then链
        } catch (e) {
            this.status = 'rejected'; //异常，则promise为reject
            this.rejectReason = e;
            return this.triggerThen(); //触发then链
        }
    } else { //不是函数则忽略
        this.triggerThen();
    }
};

// promise的catch处理  
PromiseA.prototype.catch = function (fn) {
    if (typeof fn === 'function') {
        this.errorHandle = fn;
    }
};

// promise的all处理
PromiseA.prototype.all = function (promises) {
    // 返回执行后的结果
    return new Promise((resolve, reject) => {
        // 缓存所有结果
        let arr = [];
        let i = 0;

        function processData(index, data) {
            arr[index] = data;
            // 判断是否全部成功
            if (++i == promises.length) {
                resolve(arr);
            }
        }
        for (let i = 0; i < promises.length; i++) {
            promises[i].then(data => { // data是成功的结果
                //将每次执行成功后的结果传入函数
                processData(i, data);
            }, reject);
        }
    })
}


Promise.prototype.race = function(promises){
    return new Promise((resolve,reject)=>{
        for(let i = 0;i<promises.length;i++){
            promises[i].then(resolve,reject);
        }
    })
}
