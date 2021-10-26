export const imgurApi = (formData) => {
  
  const url = "https://api.imgur.com/3/image/";
  let requestOptions = {
    method: "POST",
    headers: {
      "Authorization": 'Client-ID 0beec1d0b7cadff',
    },
    body: formData,
    redirect: "follow",
    referrer:""
  };
  return fetch(url, requestOptions).then((res) => res.json());
};
