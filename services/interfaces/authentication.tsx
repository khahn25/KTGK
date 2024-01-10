import axios from "axios";
import { obj } from "../objecttest";

const BASE_URL = "https://6507222f3a38daf4803f271f.mockapi.io/api/v1/";

export const postData = ({ name, email, mssv, addr }: obj) => {
  return axios({
    method: "POST",
    url: BASE_URL.concat("abc"),
    data: {
      name,
      email,
      mssv,
      addr,
    },
  });
};
export const getData = () => {
  return axios({
    method: "GET",
    url: BASE_URL.concat("abc"),
  });
};
export const getDataByMssv = (id: string) => {
  return axios({
    method: "GET",
    url: BASE_URL.concat("abc/").concat(id),
  });
};
export const deleteDataByMssv = (id: string) => {
  return axios({
    method: "DELETE",
    url: BASE_URL.concat("abc/").concat(id),
  });
};
