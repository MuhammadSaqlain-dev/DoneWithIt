import * as secureStore from "expo-secure-store";
import jwtDecode from "jwt-decode";

const key = "token";

const store = async (token) => {
  try {
    await secureStore.setItemAsync(key, token);
  } catch (error) {
    console.log("Error while storing Token", error);
  }
};

const get = async () => {
  try {
    return await secureStore.getItemAsync(key);
  } catch (error) {
    console.log("Error while getting token", error);
  }
};

const getUser = async () => {
  const token = await get();
  return token ? jwtDecode(token) : null;
};

const remove = async () => {
  try {
    await secureStore.deleteItemAsync(key);
  } catch (error) {
    console.log("Error while removing token", error);
  }
};

export default {
  getUser,
  get,
  remove,
  store,
};
