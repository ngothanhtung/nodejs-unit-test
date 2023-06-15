// import from the sum.js file
const sum = require('../src/sum');

describe('math', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});
