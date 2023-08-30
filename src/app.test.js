const add = require('./app');

test('Adds 2 + 3', () => {
  expect(add(2, 3)).toBe(5);
});
