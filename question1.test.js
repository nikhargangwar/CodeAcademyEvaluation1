const { CalculateScoreOfGame } = require('./question1');
describe('Testing Score of a bowling game', () =>
  describe('testing score', () => {
    it('should return score when input is all open frames', () => {
      const result = CalculateScoreOfGame([[1,2],[3,4],[5,4],[4,3],[3,3],[2,3],[4,5],[5,2],[3,3],[3,2]]);
      expect(result).toEqual(64);
    })

    it('should return score when input consist of spare frames', () => {
      const result = CalculateScoreOfGame([[1,2],[3,4],[5,4],[5,5],[3,3],[2,3],[4,5],[5,2],[3,3],[3,2]]);
      expect(result).toEqual(70);
    })

    it('should return score when input consist of strike frames', () => {
      const result = CalculateScoreOfGame([[1,2],[3,4],[5,4],[5,5],[3,3],[2,3],[4,5],[10,0],[3,3],[3,2]]);
      expect(result).toEqual(79);
    })
    
    it('should return score when input consist of open frames', () => {
      const result = CalculateScoreOfGame([[3, 6],[ 3, 6],[3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6], [3, 6]]);
      expect(result).toEqual(90);
    })
    
    it('should return score when input consist of strike frames', () => {
      const result = CalculateScoreOfGame([[6, 4], [3, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0], [0, 0]]);
      expect(result).toEqual(16);
    })
  })
);