const pattern = /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/

const convert = (number) => {
  let ret
  if (Number.isInteger(number)) {
    ret = ''
    if (number > 3999) {
      return ret
    }
    while (number > 0) {
      if (number >= 1000) {
        ret = ret + 'M'
        number = number - 1000
      } else if (number < 1000 && number >= 500) {
        if (number >= 900) {
          ret = ret + 'CM'
          number = number - 900
        } else {
          ret = ret + 'D'
          number = number - 500
        }
      } else if (number < 500 && number >= 100) {
        if (number >= 400) {
          ret = ret + 'CD'
          number = number - 400
        } else {
          ret = ret + 'C'
          number = number - 100
        }
      } else if (number < 100 && number >= 50) {
        if (number >= 90) {
          ret = ret + 'XC'
          number = number - 90
        } else {
          ret = ret + 'L'
          number = number - 50
        }
      } else if (number < 50 && number >= 10) {
        if (number >= 40) {
          ret = ret + 'XL'
          number = number - 40
        } else {
          ret = ret + 'X'
          number = number - 10
        }
      } else if (number < 10 && number >= 5) {
        if (number === 9) {
          ret = ret + 'IX'
          number = number - 9
        } else {
          ret = ret + 'V'
          number = number - 5
        }
      } else {
        if (number === 4) {
          ret = ret + 'IV'
          number = number - 4
        } else {
          ret = ret + 'I'
          number = number - 1
        }
      }
    }
    return ret
  } else {
    ret = 0
    if (!pattern.test(number)) { // Testing if the string matches the RegExp pattern
      return ret
    }
    for (let letter = 0; letter < number.length; letter = letter + 1) {
      if (number[letter] === 'I') {
        if (number[letter + 1] === 'V') {
          ret = ret + 4
        } else if (number[letter + 1] === 'X') {
          ret = ret + 9
        } else {
          ret = ret + 1
        }
      } else if (number[letter] === 'V') {
        if (number[letter - 1] === 'I') {
          ret = ret
        } else {
          ret = ret + 5
        }
      } else if (number[letter] === 'X') {
        if (number[letter + 1] === 'L') {
          ret = ret + 40
        } else if (number[letter + 1] === 'C') {
          ret = ret + 90
        } else if (number[letter - 1] !== 'I') {
          ret = ret + 10
        }
      } else if (number[letter] === 'L') {
        if (number[letter - 1] !== 'X') {
          ret = ret + 50
        }
      } else if (number[letter] === 'C') {
        if (number[letter + 1] === 'D') {
          ret = ret + 400
        } else if (number[letter - 1] === 'X') {
          ret = ret
        } else if (number[letter + 1] === 'M') {
          ret = ret + 900
        } else {
          ret = ret + 100
        }
      } else if (number[letter] === 'D') {
        if (number[letter - 1] === 'C') {
          ret = ret
        } else {
          ret = ret + 500
        }
      } else if (number[letter] === 'M') {
        if (number[letter - 1] === 'C') {
          ret = ret
        } else {
          ret = ret + 1000
        }
      } else {
        ret = ret
      }
    }
    return ret
  }
}

module.exports = {
  convert
}
