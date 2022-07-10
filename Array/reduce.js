/**
 * @param {Function} reducer - 回调函数
 * @param {any} initialValue - 初始值
 * @returns reducer回调函数遍历结果
 */
 Array.prototype.myReduce = function(reducer, initialValue) {
  const array = Array.prototype.slice.apply(this);
  if(typeof reducer !== 'function') throw new TypeError('reducer is not a function');
  const hasInitial = arguments.length >= 2;
  if(array.length == 0) {
    if(!hasInitial) return new Error('Empty array with no initial value');
    return initialValue;
  }
  if(array.length == 1 && !hasInitial) return array[0];
  let index = 0;
  if(!hasInitial) {
    initialValue = array[0];
    index = 1;
  }
  for(let i = index, length = array.length; i < length; i++) {
    initialValue = reducer(initialValue, array[i], i, array);
  }
  return initialValue;
}