import {
  checkNumberLength,
  containsOnlyLetters,
  containsOnlyNumbers,
  isEmail,
} from '../checkFormData';

test('check input data for correctness', () => {
  expect(isEmail('someone@gmail.com')).toBe(true);
  expect(isEmail('someoneatgmail.com')).toBe(false);
  expect(containsOnlyLetters('Thaddäus')).toBe(true);
  expect(containsOnlyLetters('Thaddäus1')).toBe(false);
  expect(containsOnlyNumbers(1010)).toBe(true);
  expect(containsOnlyNumbers('1010a')).toBe(true);
  expect(checkNumberLength(123, 3)).toBe(true);
  expect(checkNumberLength(12345, 3)).toBe(false);
  expect(checkNumberLength(1234567891234567, 16)).toBe(true);
  expect(checkNumberLength(1234567891234, 16)).toBe(false);
});
