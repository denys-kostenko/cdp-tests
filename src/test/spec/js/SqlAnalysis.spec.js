define(['SqlAnalysis'], function(SqlAnalysis) {
  describe('SqlAnalysis', function() {

    var sqlAnalysis, result;

    beforeEach(function () {
      sqlAnalysis = new SqlAnalysis();
      result = {
        "select": {
          "from": "table.name",
          "value": "*"
        }
      };
    });

    it('should return correct query', function() {
      expect(sqlAnalysis.parse('SELECT * FROM table.name')).toEqual(result);
    });
    it('should return Error has occurred', function() {
      expect(sqlAnalysis.parse('SeLECT * FROM table.name')).toBe('Error has occurred');
    });
    it('should return Error has occurred', function() {
      expect(sqlAnalysis.parse('SELECT & FROM ed#')).toBe('Error has occurred');
    });

  });
});
