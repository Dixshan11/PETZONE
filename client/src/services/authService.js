import jwtDecode from "jwt-decode";
import http from "./httpService";


const tokenKey = "token";

http.setJwt(getJwt());

export function logout() {
    localStorage.removeItem(tokenKey);
  }
  
  export function getCurrentUser() {
    try {
      const jwt = localStorage.getItem(tokenKey);
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  }

  export function loginWithJwt(jwt) {
    localStorage.setItem(tokenKey, jwt);
  }
  export function getJwt() {
    return localStorage.getItem(tokenKey);
  }