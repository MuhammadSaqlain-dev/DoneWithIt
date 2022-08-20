import clientApi from "./client";

const register = (token) => clientApi.post("/expoPushTokens", { token });

export default { register };
