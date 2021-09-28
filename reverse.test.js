const reverseString = require('./reverse');

test('Return the reverse of the string', () => {
  expect(reverseString('Willy')).toBe('ylliW');
});