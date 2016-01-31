(function(global) {
  'use strict';

  var converter = global.RomanNumeralConverter;

  describe('Roman numeral converter', function() {

    describe('Convert to roman', function() {

      it('convertToRoman must be a function', function(){
        expect(typeof converter.convertToRoman).toBe('function');
      });

      it('returns I', function(){
        expect(converter.convertToRoman(1)).toBe('I');
      });

      it('returns II', function(){
        expect(converter.convertToRoman(2)).toBe('II');
      });

      it('returns IV', function(){
        expect(converter.convertToRoman(4)).toBe('IV');
      });

      it('returns V', function(){
        expect(converter.convertToRoman(5)).toBe('V');
      });

      it('returns X', function(){
        expect(converter.convertToRoman(10)).toBe('X');
      });
    });

  });
}(window));