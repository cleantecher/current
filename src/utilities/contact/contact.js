import sendRequest from "../send-request";
const BASE_URL = "/api/contacts";
// const contact = require("../../../models/contact")



export async function signUp(userData) {
 console.log("Inside the contact utilities")
    return sendRequest(`${BASE_URL}`, "POST", userData);
}
export async function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, "POST", credentials);
}



export async function deleteContact(userData) {
  return sendRequest(`${BASE_URL}/id`, "DELETE", userData);
}

export async function updateFunction(userData) {
  return sendRequest(`${BASE_URL}/id`, "PUT", userData);
}

