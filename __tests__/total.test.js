// import from the sum.js file
const total = require('../src/total');

describe('math', () => {
  test('adds 1 + 2 + 3 to equal 6', () => {
    expect(total(1, 2, 3)).toBe(6);
  });
});
