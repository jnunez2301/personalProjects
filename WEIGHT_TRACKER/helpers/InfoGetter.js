import { useEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const InfoGetter = () => {
  const [allWeights, setAllWeights] = useState([]);
  const [weightLossJourneyData, setWeightLossJourneyData] = useState([]);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('weight_journey');
      const storedWeights = JSON.parse(jsonValue);
      
      if(!!storedWeights) {
        setAllWeights(storedWeights);
        setWeightLossJourneyData(() => {
          if([storedWeights].length > 7){
            return allWeights.slice(allWeights.length - 7);
          }
          else{
            return allWeights;
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, [setAllWeights]); 

  return { allWeights, weightLossJourneyData, setAllWeights, getData };
};
