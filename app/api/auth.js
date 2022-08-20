import clientApi from "./client";

const login = (email, password) => clientApi.post("/auth", { email, password });

export default { login };
