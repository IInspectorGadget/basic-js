import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
export default class DepthCalculator {
  constructor(){
    this.calculateDepth = this.calculateDepth.bind(this);
  }
  calculateDepth(arr) {
    let result = 1;
    arr.forEach(el => {
      if (Array.isArray(el)) result = Math.max(result, 1 + this.calculateDepth(el))  
    });

    return result;
  }
}
