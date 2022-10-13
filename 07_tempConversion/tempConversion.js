const ftoc = function(x) {
  let celsius = (x - 32) * (5/9)
  celsius = Math.round(celsius * 10) / 10
  return celsius
};

const ctof = function(x) {
  let fahrenheit = (x * (9/5)) + 32
  fahrenheit = Math.round(fahrenheit * 10) / 10
  return fahrenheit
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
