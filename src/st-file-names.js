import { NotImplementedError } from '../extensions/index.js';

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
export default function renameFiles(names) {
  while (names !== Array.from(new Set(names))) {
    const index = []
    for (let i = 0; i < names.length; i++) {
      const count = names.filter(el => (el === names[i])).length;
      if (count > 1) index.push(i);
    } 

    if (index.length === 0) break;

    for (let i = 1; i < index.length; i++)  names[index[i]] += `(${i})`;
  }
  return names;
}
