import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080/";
axios.defaults.headers.post["Content-Type"] = "multipart/form-data";

export const axiosReq = axios.create();