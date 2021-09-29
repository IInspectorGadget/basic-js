import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  let n_str = String(n);
  let max = 0;
  for(let i=0; i < n_str.length; i++){
    let str = n_str.slice(0,i) + n_str.slice(i+1,n_str.length);

    if(max < +str){
      max = str;
    }
  }

  return +max
}
