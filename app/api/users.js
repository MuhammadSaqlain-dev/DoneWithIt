const { default: clientApi } = require("./client");

const register = (userInfo) => clientApi.post("/users", userInfo);

export default { register };
