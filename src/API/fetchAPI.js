const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../../.env') })

export async function APIFunction(data, api) {
  return fetch(`https://website-of-bakery.herokuapp.com${api}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${data.authorization}`
    },
    body: JSON.stringify(data.data)
  })
    .then(data => data.json())
}