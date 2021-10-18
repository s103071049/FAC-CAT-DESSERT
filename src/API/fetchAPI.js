require('dotenv').config({ path: path.resolve(__dirname, '../.env') })

export async function createDiscounts(data) {
  return fetch(`${process.env.BACKEND_URL}\createDiscounts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Beaer ${data.authorization}`
    },
    body: JSON.stringify(data.data)
  })
    .then(data => data.json())
}

export const handleSummit = async (APIFunction, data) => (e) => {
  e.prevenDefault()
  const res = await APIFunction({ data, authorization: localStorage.getItem('token') })
  if (res.success) {
    alert("成功");
  } else {
    aler("失敗")
  }
}