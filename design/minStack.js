// Min Stack

var MinStack = function () {
  this.stack = [];
  this.mins = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  this.stack.push(val);
  if (this.mins.length === 0) {
    this.mins.push(val);
  } else {
    const min = this.mins[this.mins.length - 1];
    if (val <= min) this.mins.push(val);
  }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  const popVal = this.stack.pop();
  if (popVal === this.mins[this.mins.length - 1]) this.mins.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  if (this.mins.length === 0) {
    return this.top();
  } else {
    return this.mins[this.mins.length - 1];
  }
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

// var minStack = new MinStack();
// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin()); // return -3
// minStack.pop();
// console.log(minStack.top()); // return 0
// console.log(minStack.getMin()); // return -2

var minStack = new MinStack();
minStack.push(0);
minStack.push(1);
minStack.push(0);
console.log(minStack.mins, minStack.stack);
console.log(minStack.getMin()); // return -3
console.log(minStack.mins, minStack.stack);
minStack.pop();
console.log(minStack.mins, minStack.stack);
console.log(minStack.getMin()); // return -2
