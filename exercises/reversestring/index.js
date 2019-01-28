// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  // reduce way
  return str.split('')
    .reduce((acc, item) => {
      return item + acc;
    }, '');
}

module.exports = reverse;

/*
  Alternative solutions:

  function reverse(str) {
    let reversed = '';
    for(let char of str) {
      reversed = char + reversed;
    }
    return reversed;
  }

  function reverse(str) {
    let reversed = '';
    for(let i = str.length - 1; i > -1; i--) {
      reversed = reversed + str[i];
    }
    return reversed;
  }


  function reverse(str) {
    return str.split('').reverse().join('');
  }
*/
