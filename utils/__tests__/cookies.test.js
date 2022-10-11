import { deleteCookies, getCookies, setCookies } from '../cookies';

test('check cookie functions', () => {
  const value = { abc: 123, def: 456 };
  expect(getCookies('test')).toBe(undefined);
  setCookies('test', value);
  expect(getCookies('test')).toStrictEqual(value);
  deleteCookies('test');
  expect(getCookies('test')).toBe(undefined);
});
