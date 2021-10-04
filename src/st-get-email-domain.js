import { NotImplementedError } from '../extensions/index.js';

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
export default function getEmailDomain(email) {
  let
    reg = /(@[.a-z0-9-]*)/gi,
    res = email.match(reg)
  return res[res.length - 1].slice(1);
}
