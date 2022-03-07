const { getDigitNum } = require('../../1007')

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