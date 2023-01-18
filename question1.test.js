const { CalculateScoreOfGame } = require('./question');
describe('Testing Score of a bowling game', () =>
  describe('testing score', () => {
    it('Should double the elements when the input is an array', () => {
      const result = CalculateScoreOfGame([1,2],[3,4],[5,4],[4,3],[3,3][2,3],[4,5],[5,2],[3,3],[3,2]);
      expect(result).toEqual(64);
    })
    
  })
);