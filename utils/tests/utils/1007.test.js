const { getDigitNum, isInteger } = require('../../1007')

test('12345', () => {
  expect(getDigitNum(12345)).toStrictEqual([5, 4, 3, 2, 1]);
});

test('123', () => {
  expect(getDigitNum(123)).toStrictEqual([3, 2, 1]);
});

test('89', () => {
  expect(getDigitNum(89)).toStrictEqual([9, 8]);
});

test('9', () => {
  expect(getDigitNum(9)).toStrictEqual([9]);
});

test('9/3', () => {
  expect(isInteger(9, 3)).toBe(true);
});

test('9/2', () => {
  expect(isInteger(9, 2)).toBe(false);
});

test('2/2', () => {
  expect(isInteger(2, 2)).toBe(true);
});

test('15/3', () => {
  expect(isInteger(15, 3)).toBe(true);
});

test('100/7', () => {
  expect(isInteger(100, 7)).toBe(false);
});