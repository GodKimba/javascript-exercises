const sumAll = function (firstNumber, lastNumber) {
  
  // Return error if not number
  if (firstNumber < 0 || lastNumber < 0) {
      return "ERROR"
  } else if(Number.isInteger(firstNumber) == false || Number.isInteger(lastNumber) == false) {
      return "ERROR"
  } 


  // If larger number comes first
  let largerNumber;
  let smallerNumber;
  if(firstNumber > lastNumber) {
      largerNumber = firstNumber;
      smallerNumber = lastNumber;
  } else if(lastNumber > firstNumber) {
      largerNumber = lastNumber;
      smallerNumber = firstNumber
  }
  let sum = 0;
  for (let i = smallerNumber; i <= largerNumber; i++) {
    sum += i;
  }
  return sum;
};


// Do not edit below this line
module.exports = sumAll;
