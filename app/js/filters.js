// Generated by CoffeeScript 1.4.0
(function() {

  angular.module('phonecatFilters', []).filter('checkmark', function() {
    return function(input) {
      if (input) {
        return '\u2713';
      } else {
        return '\u2718';
      }
    };
  });

}).call(this);
