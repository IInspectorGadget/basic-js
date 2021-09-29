import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
export default function getDNSStats(domains) {
  const result = {}
  domains.forEach(el => {
    const el_rev  = el.split('.').reverse().map((el, i, array) =>{
      if (i != array.length){
        return "." + el;
      }
    });
    let next = ''
    for (let i = 0; i < el_rev.length; i++) {
      next += el_rev[i]
      if (result[next]) {
        result[next]++
      }  else{
        result[next] = 1
      } 
    }
  })
  return result
}