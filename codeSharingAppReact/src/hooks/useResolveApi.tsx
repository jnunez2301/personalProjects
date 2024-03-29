import axios from "axios";

export const useResolveAPi = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const getCodes = () => {
        axios
        .get(baseURL)
        .then(response =>  {
            return response.data
        })
        .catch(error => {
            console.log(error);
        })
    }
    return {}
}