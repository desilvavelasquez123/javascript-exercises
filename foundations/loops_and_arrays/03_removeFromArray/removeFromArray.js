const removeFromArray = function (array, number,...args) {
  array.splice(number - 1, number / number);
  for (const element in array) {
    console.log(typeof element);
    (element == number) ? array.splice(element - 1, 1) : element;
  }
  if (array.args != []) {array.splice(args - 1, args / args)};
return array;

  };
// Do not edit below this line
module.exports = removeFromArray;
