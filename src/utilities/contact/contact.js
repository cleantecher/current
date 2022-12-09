import sendRequest from "../send-request";
const BASE_URL = "/api/contacts";



export async function signUp(userData) {
 console.log("Inside the contact utilities")
    return sendRequest(`${BASE_URL}`, "POST", userData);
}
export async function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}
export async function update(credentials) {
  console.log(credentials);
  return sendRequest(`${BASE_URL}/update`, "POST", credentials);
}

