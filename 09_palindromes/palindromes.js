const palindromes = function (str) {
    let newArr = []
    for (i = 0; i < str.length; i++) {
        if (str[i].match(/[a-z]/i) != null) {
            newArr.push(str[i])
        }
    }
    let strArr = newArr.join('').toLowerCase()
    let reversedStr = strArr.split('').reverse().join('')
    // (strArr == reversedStr) ? true : false
    if (strArr == reversedStr) {
        return true
    } else {
        return false
    }
};

// OR
/**
const palindromes = function(string) {
   processedString = string.toLowerCase().replace(/[^a-z]/g, "");
   return (processedString.split("").reverse().join("") == processedString);
};
 */

console.log(palindromes('ZZZZ car, a man, a maracaz.'))

// Do not edit below this line
module.exports = palindromes;
