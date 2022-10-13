const sumAll = function(param1, param2) {
    if (param1 < 0 || param2 < 0) {
        return "ERROR"
    }
    if (typeof(param1) != 'number' || typeof(param2) != 'number') {
        return "ERROR"
    }
    let minParam = Math.min(param1, param2)
    let maxParam = Math.max(param1, param2)
    let result = 0
    for (i = minParam; i <= maxParam; i++) {
        result += i
    }
    return result
};

console.log(sumAll(123, 1))

// Do not edit below this line
module.exports = sumAll;
