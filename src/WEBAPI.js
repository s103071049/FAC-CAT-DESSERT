import { getAuthToken } from "./utils";
const BASE_URL = `https://website-of-bakery.herokuapp.com`;

export const login = async (email, password) => {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      email,
      password,
    }),
  });
  return await response.json();
};

export const getUser = async () => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/user`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  // if (response.statusCode !== 200) {
  //   return {};
  // }
  console.log(123);
  return await response.json();
};

export const register = async (
  username,
  password,
  firstname,
  lastname,
  phone,
  email,
  address
) => {
  const response = await fetch(`${BASE_URL}/register`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({
      username,
      password,
      firstname,
      lastname,
      phone,
      email,
      address,
    }),
  });
  return await response.json();
};
