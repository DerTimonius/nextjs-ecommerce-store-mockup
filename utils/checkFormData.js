export function isEmail(string) {
  return string.includes('@');
}
export function containsOnlyLetters(str) {
  const strArr = str.split('');
  return strArr.every((char) => isNaN(Number(char)));
}
export function containsOnlyNumbers(num) {
  return typeof Number(num) === 'number';
}
export function checkNumberLength(number, length) {
  return number.toString().split('').length === length;
}
