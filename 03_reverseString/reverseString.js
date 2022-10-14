const reverseString = function(string) {
    result = ''
    for (i = string.length - 1; i>=0; i--) {
        result += string[i]
    }
    return result
};

/****************** A MORE SIMPLER APPROACH ************************/

// const reverseString = function(string) {
//     return string.split('').reverse().join('');
//    };


// Do not edit below this line
module.exports = reverseString;
