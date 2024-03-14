const API_BASE_URL = process.env.REACT_APP_API_URL;

console.log("API_BASE_URL", API_BASE_URL);

const API_ENDPOINTS = {
  // Auth
  GET_USER: "/auth",
  LOGIN: "/auth/login",
  ACCESS_TOKEN: "/auth/access-token",
};

export { API_BASE_URL, API_ENDPOINTS };
