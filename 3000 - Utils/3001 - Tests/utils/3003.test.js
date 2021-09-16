const { formatTime } = require('../../3003')

const date = new Date();
const current = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, 0)}-${(date.getDate()).toString().padStart(2, 0)}`

test('默认', () => {
  expect(formatTime()).toBe(current);
});

test('new Date()', () => {
  expect(formatTime(new Date())).toBe(current);
});

test('2021-09-16 默认格式测试', () => {
  expect(formatTime('2021-09-16')).toBe('2021-09-16');
});

test('2021-09-16 yyyy/MM/dd hh:mm:ss w', () => {
  expect(formatTime('2021-09-16', 'yyyy/MM/dd hh:mm:ss w')).toBe('2021/09/16 00:00:00 周四');
});

test('毫秒时间戳 yyyy-MM-dd HH:mm:ss w', () => {
  expect(formatTime('1631785368944', 'yyyy-MM-dd HH:mm:ss w')).toBe('2021-09-16 17:42:48 周四');
});

test('毫秒时间戳 yyyy-MM-dd w', () => {
  expect(formatTime('1631785368944', 'yyyy-MM-dd w')).toBe('2021-09-16 周四');
});

test('毫秒时间戳 yyyy-MM-dd W', () => {
  expect(formatTime('1631785368944', 'yyyy-MM-dd W')).toBe('2021-09-16 星期四');
});

test('秒时间戳 yyyy-MM-dd W', () => {
  expect(formatTime('1631785368', 'yyyy-MM-dd W')).toBe('2021-09-16 星期四');
});

test('秒时间戳 yyyy/MM/dd hh:mm:ss W', () => {
  expect(formatTime('1631785368', 'yyyy/MM/dd hh:mm:ss W')).toBe('2021/09/16 17:42:48 星期四');
});

test('毫秒时间戳 w hh:mm', () => {
  expect(formatTime('1631785368944', 'w hh:mm')).toBe('周四 17:42');
});

test('毫秒时间戳 W', () => {
  expect(formatTime('1631785368944', 'W')).toBe('星期四');
});

test('毫秒时间戳 yyyy', () => {
  expect(formatTime('1631785368944', 'yyyy')).toBe('2021');
});

test('毫秒时间戳 M', () => {
  expect(formatTime('1631785368944', 'M')).toBe('9');
});

test('毫秒时间戳 M-d', () => {
  expect(formatTime('1631785368944', 'M-d')).toBe('9-16');
});

test('毫秒时间戳 M-d', () => {
  expect(formatTime('2021-09-06', 'M.d')).toBe('9.6');
});