const palindromes = function (string) {
    const lettersAndNumbers = 'abcdefghijklmnopqrstuvwxyz1235467890';
    const onlyCharsString = string
    .toLowerCase()
    .split('')
    .filter((character) => lettersAndNumbers.includes(character))
    .join('');

    const reversedString = onlyCharsString.split('').reverse().join('');

    return onlyCharsString === reversedString; 
};

// Do not edit below this line
module.exports = palindromes;
