/**
 * @param {Function} reducer - 回调函数
 * @param {any} initialValue - 初始值
 * @returns reducer回调函数遍历结果
 */
 Array.prototype.myReduceRight = function(reducer, initialValue) {
  const array = Array.prototype.slice.apply(this);
  if(typeof reducer !== 'function') throw new TypeError('reducer is not a function');
  const hasInitial = arguments.length >= 2;
  const length = array.length;
  if(length == 0) {
    if(!hasInitial) return new Error('Empty array with no initial value');
    return initialValue;
  }
  if(length == 1 && !hasInitial) return array[0];
  let index = length - 1;
  if(!hasInitial) {
    initialValue = array[index];
    index -= 1;
  }
  for(let i = index; i >= 0; i--) {
    initialValue = reducer(initialValue, array[i], i, array);
  }
  return initialValue;
}

let result = [1].myReduceRight((x, y) => x - y, 10);
console.log(result);