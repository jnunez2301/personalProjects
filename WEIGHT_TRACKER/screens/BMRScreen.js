import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { useLayoutEffect, useState } from 'react';
import { userInfo } from '../helpers/UserInfo';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { InfoGetter } from '../helpers/InfoGetter';

export const BMRScreen = () => {
  const { themeBackgroundColor,themeTextColor } = useTheme();
  const [weightData, setWeightData] = useState([]);
  const { allWeights, weightLossJourneyData } = InfoGetter();
  
  /* const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('my-key', jsonValue);
      console.log(jsonValue);
    } catch (e) {
      // saving error
      console.log(e);
    }
  }; */

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_info');
      setWeightData(JSON.parse(jsonValue))
    } catch (e) {
      console.log(error);
    }
  };

  useLayoutEffect(() => {
    /* storeData(userInfo); */
    getData();
  }, [])
  return (
    <View style={[style.container,{ backgroundColor: themeBackgroundColor, }]}>
        <Text style={{color: themeTextColor}}>{JSON.stringify(weightData)}</Text>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  article:{
    fontSize: 16,
    fontWeight: 'bold'
  }
})