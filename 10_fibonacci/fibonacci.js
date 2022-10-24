const fibonacci = function(member) {
    member = parseInt(member)
    if (member < 0) {
        return "OOPS"
    }
    let fibArr = []
    let next, n1 = 1, n2 = 1
    for(let i = 1; i > 0; i++) {
        fibArr.push(n1)
        next = n1 + n2
        n1 = n2
        n2 = next
        if (fibArr.length == member)
        break;
    }
    return fibArr[member - 1]
};

// OR 
/**
const fibonacci = function(count) {
  if (count < 0) return "OOPS";
  if (count === 0) return 0;
  let a = 0;
  let b = 1;
  for (let i = 1; i < count; i++) {
    const temp = b;
    b = a + b;
    a = temp;
  }
  return b;
};
 */

// Do not edit below this line
module.exports = fibonacci;
