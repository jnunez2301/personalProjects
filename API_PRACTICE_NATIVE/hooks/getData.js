import { View, Text, ScrollView } from 'react-native'
import { useRoute } from '@react-navigation/native';
import axios from 'axios'
import { useLayoutEffect, useState } from 'react';

export const getData = () => {
    const route = useRoute();
    const { baseURL } = route.params;
    const [data, setData] = useState([]);

    useLayoutEffect(()=>{
        axios
        .get(baseURL)
        .then(response => setData(response.data))
        .catch(error => console.log(error))
    }, [])
  return {
    data
  }
}
