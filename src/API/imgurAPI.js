export const imgurApi = (formData) => {
  
  const url = "https://api.imgur.com/3/image/";
  let requestOptions = {
    method: "POST",
    headers: {
      "Authorization": `Bearer 545df9f9245e9bd51e37439c89377e9606514a67`,
    },
    body: formData,
    redirect: "follow",
    referrer:""
  };
  return fetch(url, requestOptions).then((res) => res.json());
};
