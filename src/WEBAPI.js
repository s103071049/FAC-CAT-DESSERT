import { getAuthToken } from "./utils";
const BASE_URL = `https://website-of-bakery.herokuapp.com`;
// 會員系統
//登入
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
//token串api拿user
export const getUser = async () => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/user`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};
//註冊
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
// 更改user
export const updateUser = async (
  username,
  firstname,
  lastname,
  phone,
  address
) => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/user`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      username,
      firstname,
      lastname,
      phone,
      address,
    }),
  });
  return await response.json();
};
// 更改密碼
export const updatePassword = async (password, newPassword, newPassword2) => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/update-password`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      password,
      newPassword,
      newPassword2,
    }),
  });
  return await response.json();
};

// product
// 單項商品
export const getProduct = async (id) => {
  const response = await fetch(`${BASE_URL}/findProducts/${id}`);
  return await response.json();
};
// 多項商品
export const getAllProducts = async () => {
  const response = await fetch(`${BASE_URL}/findAllProducts`);
  return response.json();
};
//search products
export const searchProducts = async (searchKey) => {
  const response = await fetch(`${BASE_URL}/searchProducts/${searchKey}`);
  return await response.json();
};

// order
// 抓取所有order
export const getAllOrder = async () => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/getAllOrder`, {
    headers: {
      authorization: `Bearer ${token}`,
    },
  });
  return await response.json();
};

//  cart
// add Cart item
export const addCartItem = async (productId, quantity) => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/addCartItem`, {
    method: "POST",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
    body: JSON.stringify({
      productId,
      quantity,
    }),
  });
  return await response.json();
};
// getAll Cart items
export const getAllCartItems = async () => {
  const token = getAuthToken();
  const response = await fetch(`${BASE_URL}/getAllCartItems`, {
    method: "GET",
    headers: {
      authorization: `Bearer ${token}`,
      "content-type": "application/json",
    },
  });
  return await response.json();
};
