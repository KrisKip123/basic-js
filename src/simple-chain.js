import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    if (value === '') {
      this.arr.push('( )~~');
    } else {
      this.arr.push(`( ${value} )~~`);
    }
    return this;
  },
  removeLink(position) {
    if (position > this.arr.length || position <= 0 || isNaN(position)) {
      this.arr = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.arr = this.arr.slice(0, position - 1).concat(this.arr.slice(position));
    return this;
  },
  reverseChain() {
    this.arr = this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join('').slice(0, -2);
    this.arr = []
    return result;
  }
};
