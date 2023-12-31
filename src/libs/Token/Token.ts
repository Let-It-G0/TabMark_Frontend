import { ACCESS_TOKEN_KEY } from "../../constants/Auth/auth.constant";
import cookie from "../Cookie/cookie";

interface Storage {
  getToken(key: string): string | undefined;
  setToken(key: string, value: string): void;
  clearToken(): void;
  removeToken(key: string): void;
}

class Token implements Storage {
  public getToken(key: string): string | undefined {
    return cookie.getCookie(key);
  }

  public setToken(key: string, token: string): void {
    cookie.setCookie(key, token);
  }

  public clearToken() {
    cookie.removeCookie(ACCESS_TOKEN_KEY);
  }

  public removeToken(key: string) {
    cookie.removeCookie(key);
  }
}

export default new Token();
