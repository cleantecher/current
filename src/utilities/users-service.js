import * as usersAPI from "./users-api";

// functions for retrieving / dealing with user data
export async function signUp(userData) {
  const token = await usersAPI.signUp(userData);
  localStorage.setItem("token", token);
  return getUser();
}

export async function update(userData) {
  const user = await usersAPI.update(userData);
  return user;
}

export function getToken() {
  const token = localStorage.getItem("token");
  if (!token) return null;
  // get the token then decode using atob
  // for alternative to the now depracated atob
  // https://stackoverflow.com/questions/6182315/how-can-i-do-base64-encoding-in-node-js
  const payload = JSON.parse(atob(token.split(".")[1]));
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem("token");
    return null;
  }
  return token;
}

export function checkToken() {
  // checkToken returns a string, but let's
  // make it a Date object for more flexibility
  return usersAPI.checkToken().then((dateStr) => new Date(dateStr));
}

export function getUser() {
  const token = getToken();
  return token ? JSON.parse(atob(token.split(".")[1])).user : null;
}

export function logOut() {
  localStorage.removeItem("token");
}

export async function logIn(credentials) {
  const token = await usersAPI.logIn(credentials);
  localStorage.setItem("token", token);
  return getUser();
}