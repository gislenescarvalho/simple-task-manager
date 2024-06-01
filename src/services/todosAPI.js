import createAxiosInstance from "./axiosFactory";

let axios;

export const getTodosInfo = async () => {
  axios = createAxiosInstance();
  let url = `https://jsonplaceholder.typicode.com/todos`;

  return axios.get(url);
};

