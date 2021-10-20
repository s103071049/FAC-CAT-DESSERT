const TOKEN_NAME = "token";

export const setAuthToken = (token) => {
  return localStorage.setItem(TOKEN_NAME, token);
};
export const getAuthToken = (token) => {
  return localStorage.getItem(TOKEN_NAME);
};
export const removeAuthToken = (token) => {
  return localStorage.removeItem(TOKEN_NAME);
};
