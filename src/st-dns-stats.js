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
  let obj = {}
  let mappedArr = domains.map((a) => a.split('.'));

  mappedArr.forEach((a) => {
    let help = `.${a[a.length - 1]}`;

    for (let i = a.length - 1; i >= 0; i--) {
      if (help in obj) {
        ++obj[help];
      } else {
        obj[help] = 1;
      }
      help += `.${a[i - 1]}`;
    }
  })

  return obj;
}
