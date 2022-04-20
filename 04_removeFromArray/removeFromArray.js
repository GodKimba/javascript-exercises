const removeFromArray = function(array, num) {
    for (let i = 0; i <= array.length; i++) {
        if (i == num) {
            let index = array.indexOf(i)
            array.splice(index, 1)
        }
    }
   return array
};

// Do not edit below this line
module.exports = removeFromArray;
