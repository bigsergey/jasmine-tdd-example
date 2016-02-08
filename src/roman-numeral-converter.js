(function(global, undefined) {
  'use strict';

  var values = {
    '1': 'I',
    '5': 'V',
    '10': 'X',
    '50': 'L',
    '100': 'C',
    '500': 'D',
    '1000': 'M'
  };

  var ConvertToRoman = function(value) {
    if (typeof value !== 'number' || isNaN(value) || !isFinite(value)) {
      throw new TypeError('Value must be a number');
    }
    return values[value];
  };

  global.RomanNumeralConverter = {
    convertToRoman: ConvertToRoman
  };
}(window));