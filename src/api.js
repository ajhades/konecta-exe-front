import axios from "axios";
console.log("api", process.env.REACT_APP_SERVER_URL);
export default axios.create({
  baseURL: process.env.REACT_APP_SERVER_URL,
  headers: {
    "Content-type": "application/json",
  },
});
