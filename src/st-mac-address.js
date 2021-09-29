import { NotImplementedError } from '../extensions/index.js';

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
export default function isMAC48Address(n) {
  const arr = n.split('-').join('').split('');
  const mac_args = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F'];
  
  if(n.length > 17 && arr.length != 12) return false;

  const arr_filter = arr.filter(el => mac_args.includes(el));

  if(arr_filter.length == arr.length) return true;

  return false;

}
