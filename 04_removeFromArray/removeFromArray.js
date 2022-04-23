const removeFromArray = function (array, ...valueToCheck) {
  for(let value of valueToCheck) {
    for(let arrayValue of array) {
      if (value == arrayValue) {
        let index = array.indexOf(value);
        array.splice(index, 1)
      }
    }
  }
  return array
};

// Do not edit below this line
module.exports = removeFromArray;
