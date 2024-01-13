import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const InfoGetter = () => {
  const [allWeights, setAllWeights] = useState([{weight: 0, date: new Date()}]);
  const [weightLossJourneyData, setWeightLossJourneyData] = useState([]);
  const [userData, setUserData] = useState([]);


  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('weight_journey');
      if (jsonValue) {
        const storedWeights = JSON.parse(jsonValue);
  
        if (Array.isArray(storedWeights) && storedWeights.length > 0) {
          setAllWeights(storedWeights);
          setWeightLossJourneyData(() => {
            if (storedWeights.length > 7) {
              return storedWeights.slice(storedWeights.length - 7);
            } else {
              return storedWeights;
            }
          });
        }
      }
    } catch (e) {
      console.log(e);
    }
  };
  
  
  

  useEffect(() => {
    getData();
  }, [setAllWeights]); 

  return { allWeights, weightLossJourneyData, setAllWeights, getData, userData };
};
