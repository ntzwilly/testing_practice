const capitalize = require('./capitalize');

test('capitalize a string', () => {
  expect(capitalize('willy')).toBe('Willy');
});

