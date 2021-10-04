import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
export default class VigenereCipheringMachine {

  constructor(op) {
    this.op = op;
    this.min = 65;
    this.max = 90;
  }

  encrypt(msg, key) {

    if (!msg || !key) {
      throw new Error('Incorrect arguments!')
    }
    let indices = [];

    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === ' ') {
        indices.push(i);
      }
    }

    let moddedStr = msg.split(' ').join('').toUpperCase();//убрал пробелы и это то, что подлежит перебору
    let multiply = Math.ceil(moddedStr.length / key.length);
    key = key.repeat(multiply).toUpperCase();
    let sliceChunkNum = key.length - moddedStr.length;


    if (key.length > moddedStr.length) {
      key = key.slice(0, -sliceChunkNum); //модификат ключа
    } else if (key.length < moddedStr.length) {
      key = key.slice(0, sliceChunkNum); // модификат ключа
    } else {
      key = key;
    }
    moddedStr = moddedStr.split('');

    for (let i = 0; i < moddedStr.length; i++) {
      let reg = /[A-Z]/g
      if (!reg.test(moddedStr[i])) {
        continue;
      }
      let helper = +moddedStr[i].charCodeAt();
      let delta = +key[i].charCodeAt() - this.min;

      for (let i = 1; i <= delta; i++) {
        if (helper === this.max) {
          helper = 64;
        }
        helper++;
      }
      moddedStr[i] = String.fromCodePoint(helper);
    }

    for (let i = 0; i < indices.length; i++) {
      for (let j = 0; j < moddedStr.length; j++) {
        if (indices[i] === j) {
          let l = moddedStr.slice(0, j);
          l.push(' ');
          let r = moddedStr.slice(j);
          moddedStr = l.concat(r);
        }
      }
    }
    if (this.op === false) {
      return moddedStr.reverse().join('')
    }
    return moddedStr.join('');

  }
  decrypt(msg, key) {

    if (!msg || !key) {
      throw new Error('Incorrect arguments!')
    }

    let indices = [];

    for (let i = 0; i < msg.length; i++) {
      if (msg[i] === ' ') {
        indices.push(i);
      }
    }

    let moddedStr = msg.split(' ').join('').toUpperCase();//убрал пробелы и это то, что подлежит перебору
    let multiply = Math.ceil(moddedStr.length / key.length);
    key = key.repeat(multiply).toUpperCase();
    let sliceChunkNum = key.length - moddedStr.length;


    if (key.length > moddedStr.length) {
      key = key.slice(0, -sliceChunkNum); //модификат ключа
    } else if (key.length < moddedStr.length) {
      key = key.slice(0, sliceChunkNum); // модификат ключа
    } else {
      key = key;
    }
    moddedStr = moddedStr.split('');

    for (let i = 0; i < moddedStr.length; i++) {
      let reg = /[A-Z]/g
      if (!reg.test(moddedStr[i])) {
        continue;
      }
      let helper = +moddedStr[i].charCodeAt();
      let delta = +key[i].charCodeAt() - this.min;

      for (let i = 1; i <= delta; i++) {
        if (helper === this.min) {
          helper = 91;
        }
        helper--;
      }
      moddedStr[i] = String.fromCodePoint(helper);
    }

    for (let i = 0; i < indices.length; i++) {
      for (let j = 0; j < moddedStr.length; j++) {
        if (indices[i] === j) {
          let l = moddedStr.slice(0, j);
          l.push(' ');
          let r = moddedStr.slice(j);
          moddedStr = l.concat(r);
        }
      }
    }
    if (this.op === false) {
      return moddedStr.reverse().join('')
    }
    return moddedStr.join('');
  }
}
