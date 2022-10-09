import Cookies from 'js-cookie';

export function setCookies(key, value) {
  return Cookies.set(key, JSON.stringify(value), { expires: 3 });
}

export function getCookies(key) {
  const cookie = Cookies.get(key);
  if (!cookie) {
    return undefined;
  }
  try {
    return JSON.parse(cookie);
  } catch (err) {
    return undefined;
  }
}

export function deleteCookies(key) {
  return Cookies.remove(key);
}
