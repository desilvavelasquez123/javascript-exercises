const removeFromArray = function (array, ...args) {
  (array.includes(args)) ? array = [] : array;
  for (const element of array) {
    for (const argument of args) {
    (array.includes(argument)) ? array.splice(array.indexOf(argument), 1) : element;
    }
  }
  return array;
};

// Do not edit below this line
module.exports = removeFromArray;
