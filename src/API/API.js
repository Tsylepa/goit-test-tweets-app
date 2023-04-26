import axios from "axios";

const BASE_URL = "https://64453708b80f57f581b422a8.mockapi.io";
const params = {
  limit: 3,
};

async function getUsers(page) {
  const { data } = await axios.get(`${BASE_URL}/users`, {
    params: { ...params, page },
  });
  return data;
}

async function getUserById({ id, page }) {
  const { data } = await axios.get(`${BASE_URL}/users/${id}`, {
    params: { ...params, page },
  });
  return data;
}

async function followersUpdate({ id, modificator }) {
  const userToUpdate = await getUserById({ id });
  const { data } = await axios.put(`${BASE_URL}/users/${id}`, {
    followers: userToUpdate.followers + modificator,
  });
  return data;
}

export { getUsers, followersUpdate };
