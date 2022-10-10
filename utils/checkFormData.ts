export function isEmail(string: string): boolean {
  return string.includes('@');
}
export function containsOnlyLetters(str: string): boolean {
  const strArr = str.split('');
  return strArr.every((char) => isNaN(Number(char)));
}
export function containsOnlyNumbers(num: number): boolean {
  return typeof Number(num) === 'number';
}
export function checkNumberLength(number: number, length: number): boolean {
  return number.toString().length === length;
}
