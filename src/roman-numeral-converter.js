(function(global, undefined) {
  'use strict';

  var values = {
    '1': 'I',
    '2': 'II',
    '4': 'IV',
    '5': 'V',
    '10': 'X'
  };

  var ConvertToRoman = function(value) {
    return values[value];
  };

  global.RomanNumeralConverter = {
    convertToRoman: ConvertToRoman
  };
}(window));