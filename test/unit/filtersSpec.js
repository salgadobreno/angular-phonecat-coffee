// Generated by CoffeeScript 1.4.0
(function() {

  describe('filter', function() {
    beforeEach(function() {
      return module('phonecatFilters');
    });
    return it('should convert boolean values to unicode checkmark or cross', function() {
      return inject(function(checkmarkFilter) {
        expect(checkmarkFilter(true)).toBe('\u2713');
        return expect(checkmarkFilter(false)).toBe('\u2718');
      });
    });
  });

}).call(this);
