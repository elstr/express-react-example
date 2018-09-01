// Service that does the api calls
import { apiURL } from "../configs";

export const get = path => {
  return new Promise((resolve, reject) =>
    fetch(apiURL + "/" + path, {
      method: "GET"
    })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(error => reject({ error }))
  );
};

export const edit = (path, body) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");
  headers.append("Access-Control-Allow-Methods", "*");

  return new Promise((resolve, reject) =>
    fetch(apiURL + "/" + path + "/edit", {
      method: "PATCH",
      headers,
      body: JSON.stringify({
        ...body
      })
    })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(error => reject({ error }))
  );
};

export const add = (path, body) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  console.log({ body });

  return new Promise((resolve, reject) =>
    fetch(apiURL + "/" + path + "/add", {
      method: "POST",
      headers,
      body: JSON.stringify({
        ...body
      })
    })
      .then(res => res.json())
      .then(res => resolve(res))
      .catch(error => reject({ error }))
  );
};

export const del = (path, id) => {
  const headers = new Headers();
  headers.append("Content-Type", "application/json");

  return new Promise((resolve, reject) =>
    fetch(apiURL + "/" + path + "/delete/" + id, {
      method: "DELETE",
      headers
    })
      .then(res => res.json())
      .then(res => resolve({ res }))
      .catch(error => reject({ error }))
  );
};
