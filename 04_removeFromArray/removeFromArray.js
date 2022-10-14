/*
const removeFromArray = function(arr) {
    // slices arguments from the 1st index up to the very last one
    // and puts them into a new array "args"
    args = Array.prototype.slice.call(arguments, 1)
    for (i = 0; i < args.length; i++) {
        if (arr.includes(args[i])) {
            // removes the current argument frm the array "arr"
            arr.splice(arr.indexOf(args[i]), 1)
        }
    }
    return arr
};
*/



/****************** ANOTHER APPROACH USING THE REST PARAMETER ****************/
const removeFromArray = function(arr, ...myArgs) {
    for (i = 0; i < myArgs.length; i++) {
        if (arr.includes(myArgs[i])) {
            arr.splice(arr.indexOf(myArgs[i]), 1)
        }
    }
    return arr
}

console.log(removeFromArray([1, 2, 3, 4, "hey"], 3, 2))

// A simpler, but more advanced way to do it is to use the 'filter' function,
// 

// var removeFromArray = function(...args) {
//   const array = args[0]
//   return array.filter(val => !args.includes(val))
// }
//

// Do not edit below this line
module.exports = removeFromArray;
