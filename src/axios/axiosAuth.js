import axios from "axios";

export const axiosAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    baseURL: "https://haircare-backend-dingo.herokuapp.com",
    headers: {
      Authorization: token
    }
  });
};

export default axiosAuth;
