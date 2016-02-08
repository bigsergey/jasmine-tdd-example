(function(global) {
  'use strict';

  var converter = global.RomanNumeralConverter;

  describe('Roman numeral converter', function() {

    describe('Convert to roman function test', function() {

      describe('API test', function() {
        it('convertToRoman must be a function', function() {
          expect(typeof converter.convertToRoman).toBe('function');
        });

        it('throws when the argument is not a number', function() {
          expect(function() {
            converter.convertToRoman();
          }).toThrowError(TypeError);
          expect(function() {
            converter.convertToRoman(null);
          }).toThrowError(TypeError);
          expect(function() {
            converter.convertToRoman('');
          }).toThrowError(TypeError);
          expect(function() {
            converter.convertToRoman([]);
          }).toThrowError(TypeError);
        });

        it('should return String', function() {
          expect(converter.convertToRoman(1)).toEqual(jasmine.any(String));
        });
      });

      describe('Test base 7 symbols', function() {
        it('returns I', function() {
          expect(converter.convertToRoman(1)).toBe('I');
        });

        it('returns V', function() {
          expect(converter.convertToRoman(5)).toBe('V');
        });

        it('returns X', function() {
          expect(converter.convertToRoman(10)).toBe('X');
        });

        it('returns L', function() {
          expect(converter.convertToRoman(50)).toBe('L');
        });

        it('returns C', function() {
          expect(converter.convertToRoman(100)).toBe('C');
        });

        it('returns D', function() {
          expect(converter.convertToRoman(500)).toBe('D');
        });

        it('returns M', function() {
          expect(converter.convertToRoman(1000)).toBe('M');
        });
      });

    });
  });
}(window));
