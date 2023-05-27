import axios from 'axios';

const api = axios.create({
    baseURL: "https://gateway.scan-interfax.ru/"
})

api.interceptors.request.use((config) => {
    config.headers["Content-Type"] = "application/json";
    config.headers.Accept = "application/json";
    config.headers.Authorization = `Bearer ${localStorage.getItem("token")}`;
    return config;
});

export default api;