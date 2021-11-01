require("dotenv").config();
const BASE_URL = `https://website-of-bakery.herokuapp.com`;

export async function PostDataAPI(data, api) {
  return fetch(`${BASE_URL}${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.authorization}`,
    },
    body: JSON.stringify(data.data),
  }).then((data) => data.json());
}

export async function FindDataAPI(data, api) {
  return fetch(`${BASE_URL}${api}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.authorization}`,
    },
  }).then((data) => data.json());
}

export async function searchAPI(data, api) {
  return await fetch(`${BASE_URL}${api}/${data.key}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.authorization}`,
    },
  }).then((data) => data.json());
}
