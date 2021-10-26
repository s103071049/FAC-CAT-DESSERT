const path = require("path");
require("dotenv").config();

export async function PostDataAPI(data, api) {
  return fetch(`https://website-of-bakery.herokuapp.com${api}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.authorization}`,
    },
    body: JSON.stringify(data.data),
  }).then((data) => data.json());
}

export async function FindDataAPI(data, api) {
  return fetch(`https://website-of-bakery.herokuapp.com${api}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${data.authorization}`,
    },
  }).then((data) => data.json());
}
