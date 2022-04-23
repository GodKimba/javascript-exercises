const ftoc = function(temperatureInFarenheit) {
  temperatureInCelsius = ((temperatureInFarenheit - 32) * 5) / 9
  return parseFloat(temperatureInCelsius.toFixed(1))
};

const ctof = function(temperatureInCelsius) {
  temperatureInFarenheit = ((temperatureInCelsius * 1.8) + 32)
  return parseFloat(temperatureInFarenheit.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
