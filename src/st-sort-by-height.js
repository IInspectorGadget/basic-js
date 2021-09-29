import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
export default function sortByHeight(arr) {
  let indexes = [];
  for(let i=0; i< arr.length; i++) if (arr[i] == -1) indexes.push(i)

  let arr_helper = arr.filter(el => el !== -1).sort(heightSort);

  function heightSort(a,b){
    if (a==b) return 0;
    if (a<b) return -1;
    if (a>b) return 1;
  }

  for (let i = 0; i < indexes.length; i++) {
    arr_helper.splice(indexes[i], 0, -1);
  }

  return arr_helper;
}
