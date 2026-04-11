import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080/url",
});

export const shortenURL = (data) => {
  API.post("/", data);
};
export const getStats = () => {
  API.get("/url/dashboard/:shortId");
};
