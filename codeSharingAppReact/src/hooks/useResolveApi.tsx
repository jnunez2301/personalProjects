import axios from "axios";
import { SharedCode } from "../models/SharedCode";

export const useResolveAPi = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;
  const getCodes = () => {
    axios
      .get(baseURL)
      .then((response) => {
        return response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getCodeById = (idParam: string) => {
    axios
    .get(`${baseURL}/${idParam}`)
    .then(response => {
      return response.data
    })
    .catch(error => console.log(error))
  }
  const postCodes = (idParam: string) => {
    axios
    .post(`${baseURL}/${idParam}`)
    .then((response) => {
      return {data: response.data, status: response.status};
    })
    .catch(error => console.log(error))
  }
  const updateCode = (newCode: SharedCode) => {
    axios
    .post(baseURL, newCode)
    .then(response => {
      return {
        data: response.data,
        status: response.status
      }
    })
    .catch(error => console.log(error))
  }
  return {
    getCodes,
    getCodeById,
    postCodes,
    updateCode
  };
};
