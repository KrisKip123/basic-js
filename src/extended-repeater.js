import { NotImplementedError } from '../extensions/index.js';

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
export default function repeater(str, options) {
  if (typeof (str) === 'boolean' || str === null) {
    str = `${str}`
  }

  options.repeatTimes = options.repeatTimes || 1;
  options.separator = options.separator || '+';
  if (typeof (options.addition) === 'boolean' || options.addition === null) {
    options.addition = `${options.addition}`
  } else {
    options.addition = options.addition || '';
  }
  //options.addition = options.addition || '';
  options.additionRepeatTimes = options.additionRepeatTimes || 1;
  options.additionSeparator = options.additionSeparator || '|';
  let addRepeat = (options.addition + options.additionSeparator).repeat(options.additionRepeatTimes).slice(0, -options.additionSeparator.length)

  return str = `${str}${addRepeat}${options.separator}`.repeat(options.repeatTimes).slice(0, -options.separator.length)
}
