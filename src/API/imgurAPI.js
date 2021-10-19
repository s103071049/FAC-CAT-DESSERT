export const imgurApi = (formData) => {
  const url = "https://api.imgur.com/3/image";
  let requestOptions = {
    method: "POST",
    headers: {
      Authorization: "Client-ID 623487535f2f5ba",
    },
    body: formData,
    redirect: "follow",
  };
  return fetch(url, requestOptions).then((res) => res.json());
};
