define([], function() {
  'use strict';

  var SqlAnalysis = function () {
  };

  SqlAnalysis.prototype = {
    parse: function (str) {
      var output = [];
      var arr = str.split(' ');

      arr.forEach(function (item, i) {
        (i === 0 || i % 2 === 0) ? output.push(checkKeyWord(item)) : output.push(checkQueryWords(item));
      });

      return falseChecker(output);
    }
  };

  function checkKeyWord(str) {
    return ((str == str.toUpperCase()) && isValid(str)) ? str : 'false';
  }

  function checkQueryWords(str) {
    return ((str == str.toLowerCase()) && isValid(str)) ? str : 'false';
  }

  function isValid(str) {
    return !/[~`!#$%\^&+=\-\[\]\\';,/{}|\\":<>\?]/g.test(str);
  }

  function falseChecker(arr) {
    return (arr.indexOf('false') == -1) ? {select: {from: arr[3], value: arr[1]}} : 'Error has occurred';
  }


  return SqlAnalysis;
});
