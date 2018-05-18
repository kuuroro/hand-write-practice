/**
 *
 * 常规版，没有尾调用优化，n过大，会调用栈溢出
 * @param {*} count
 * @returns
 */
function Fibonacci(count) {
  if (count <= 1) { return 1 };
  return Fibonacci(count - 1) + Fibonacci(count - 2);
}



/**
 *
 * 尾调用优化
 * @param {*} count
 * @param {number} [ac1=1]
 * @param {number} [ac2=1]
 * @returns
 */
function Fibonacci2(count, ac1 = 1, ac2 = 1) {
  if (count <= 1) { return ac2 };
  return Fibonacci2(count - 1, ac2, ac1 + ac2);
}



/**
 *
 * 循环版
 * @param {*} count
 * @returns
 */
function Fibonacci3(count) {
  if (count === 1 || count === 2) {
    return 1;
  }
  let ac1 = 1, ac2 = 1;
  for (let i = 2; i < count; i++) {
    [ac1, ac2] = [ac2, ac1 + ac2];
  }
  return ac2;
}



/**
 *
 * generator版
 * @param {*} count
 * @returns
 */


function* fibonacci() {
  let [prev, curr] = [1, 1];
  while (true) {
    [prev, curr] = [curr, prev + curr];
    yield curr;
  }
}
function Fibonacci(count) {
  if (count === 1 || count === 2) {
    return 1;
  }
  let ac = 0;
  const fibo = fibonacci();
  for (let i = 2; i < count; i++) {
    ac = fibo.next()
  }
  return ac.value;
}

