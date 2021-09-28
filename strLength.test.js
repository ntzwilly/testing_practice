const strLength = require('./strLength');

test('Test the length of a string:', () => {
  expect(strLength('Willy')).toBe(5);
});

test('Test if the length is between 1 and 10:', () => {
  expect(() => {
    strLength('Ntazama Willy');
  }).toThrow();
});

test('Test if the length is between 1 and 10:', () => {
  expect(() => {
    strLength('');
  }).toThrow();
});