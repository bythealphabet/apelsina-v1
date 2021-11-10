import queryString from "query-string";

const create = ({ shopId, token, productData }) => {
  return fetch(`/api/products/by/${shopId}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: productData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const read = ({ productId }) => {
  return fetch(`/api/products/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log("error reading:", err));
};

const update = ({ shopId, productId, token, productData }) => {
  return fetch(`/api/product/${shopId}/${productId}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: productData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const remove = ({ shopId, productId, token }) => {
  return fetch(`/api/product/${shopId}/${productId}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const listLatest = () => {
  return fetch("/api/products/latest", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => err);
};

const listRelated = ({ productId }) => {
  return fetch(`/api/products/related/${productId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const listByShop = ({ shopId }) => {
  return fetch(`/api/products/by/${shopId}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const list = (params) => {
  const query = queryString.stringify(params);
  return fetch(`/api/products?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export {
  create,
  read,
  listByShop,
  listLatest,
  listRelated,
  update,
  remove,
  list,
};
