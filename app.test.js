var { sum } = require('./app');

describe('sum', () => {
  test('adds numbers', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
