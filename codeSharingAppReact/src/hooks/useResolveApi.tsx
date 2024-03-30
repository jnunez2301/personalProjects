import axios from "axios";
import { SharedCode } from "../models/SharedCode";

export const useResolveApi = () => {
  const baseURL = import.meta.env.VITE_BASE_URL;

  async function getCodes() {
    try {
      const response = await axios.get(baseURL);
      return response.data || [];
    } catch (error) {
      console.log(error);
      return [];
    }
  }

  async function getCodeById(idParam: string) {
    try {
      const response = await axios.get(`${baseURL}/${idParam}`);
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function postCodes(idParam: string) {
    try {
      const response = await axios.post(`${baseURL}/${idParam}`);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async function updateCode(newCode: SharedCode) {
    try {
      const response = await axios.post(baseURL, newCode);
      return { data: response.data, status: response.status };
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  return {
    getCodes,
    getCodeById,
    postCodes,
    updateCode,
  };
};
