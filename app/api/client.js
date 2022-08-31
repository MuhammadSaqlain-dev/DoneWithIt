import { create } from "apisauce";
import authStorage from "../auth/authStorage";
import cache from "../utility/cache";
import logger from "../utility/logger";
import settings from "../config/settings";

const clientApi = create({
  baseURL: settings.apiUrl,
});

clientApi.addAsyncRequestTransform(async (request) => {
  const authToken = await authStorage.get();
  if (!authToken) return;
  request.headers["x-auth-token"] = authToken;
});

const get = clientApi.get;
clientApi.get = async (url, params, axiosConfig) => {
  const response = await get(url, params, axiosConfig);

  if (response.ok) {
    cache.store(url, response.data);
    return response;
  }

  const data = await cache.get(url);
  logger.log("data", data);
  return data ? { ok: true, data } : response;
};

export default clientApi;
