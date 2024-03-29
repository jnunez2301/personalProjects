import axios from "axios";

export const useResolveAPi = () => {
    const baseURL = import.meta.env.VITE_BASE_URL;
    const getCodes = () => {
        console.log(baseURL);
        
        axios
        .get(baseURL)
        .then(response =>  {
            console.log(response);
            
            return response.data
        })
        .catch(error => {
            console.log(error);
        })
    }
    return {
        getCodes
    }
}