const list = () => {
  return fetch("/api/shops", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const listByOwner = ({ userId, token }) => {
  return fetch(`/api/shops/by/${userId}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
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

const create = ({ params, token, shopData }) => {
  return fetch(`/api/shops/by/${params}`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: shopData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

const update = ({ params, token, shopData }) => {
  return fetch(`/api/shop/${params}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: shopData,
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => {
      console.log(err);
    });
};

const remove = ({ shopId, token }) => {
  return fetch(`/api/shop/${shopId}`, {
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

const read = ({ params }) => {
  return fetch("/api/shop/" + params, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export { create, list, listByOwner, read, update, remove };
