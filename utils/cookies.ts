import Cookies from 'js-cookie';

export type CookieType = {
  id: number;
  quantity: number;
};

export function setCookies(key: string, value: CookieType[]) {
  return Cookies.set(key, JSON.stringify(value), { expires: 3 });
}

export function getCookies(key: string): CookieType[] | undefined {
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

export function deleteCookies(key: string) {
  return Cookies.remove(key);
}
