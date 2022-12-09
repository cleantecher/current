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

// Aman messed this up the address is wrong. 
// the /contacts might be wrong here
export async function deleteContact(userData) {
  return sendRequest(`${BASE_URL}/id`, "DELETE", userData);
}