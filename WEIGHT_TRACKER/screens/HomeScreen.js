import { View, Text, StyleSheet, SafeAreaView, ScrollView, ScrollViewComponent, RefreshControl } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { ChartContainer } from '../components/ChartContainer';
import { AddButton } from '../components/AddButton';
// import { weightLossJourneyData } from '../helpers/Info';
//import { userInfo } from '../helpers/UserInfo';
import { RandomPhrase } from '../components/RandomPhrase';
import { InfoGetter } from '../helpers/InfoGetter';
import { useState } from 'react';



export const HomeScreen = ({ route }) => {
  const {params} = route;
  const { userInfo }  = params;
  const { themeBackgroundColor, themeTextColor } = useTheme();
  const { weightLossJourneyData, allWeights, getData } = InfoGetter();
  const [refreshing, setRefreshing] = useState(false)
  
  
  const onRefresh= () => {
    setRefreshing(true)
    setTimeout(() => {
      getData();
      setRefreshing(false)
    }, 1000)
  }

  
  return (
    <ScrollView
    refreshControl={<RefreshControl 
      
      refreshing={refreshing} onRefresh={onRefresh}/>}
     style={[style.container, { backgroundColor: themeBackgroundColor }]}
    >
      <View
       style={style.goalsBar}>
        <View>
          <Text style={[{ color: themeTextColor}, style.text]}>Start</Text>
          <Text style={[{ color: 'gray'}, style.text]}>{userInfo.startWeight} kg</Text>
        </View>    
        <View>
          <Text style={[{ color: themeTextColor}, style.text]}>Current</Text>
          <Text style={[{ color: 'blue'}, style.text]}>
          
          {allWeights.length > 0 && allWeights[allWeights.length - 1].selectedWeight} kg</Text>
        </View>
        <View>
          <Text style={[{ color: themeTextColor}, style.text]}>Target</Text>
          <Text style={[{ color: 'gray'}, style.text]}>{ userInfo.weightTarget } kg</Text>
        </View>
      </View>
      <ChartContainer newInfo={allWeights}/>
      <View style={style.btnUI}>
        <View>
          <Text style={[style.text, {color: themeTextColor}]}>Change</Text>
          <Text style={[{color: 'gray'}, style.text]}>
          {
          allWeights.length > 0 ?
          allWeights[allWeights.length - 1].selectedWeight - userInfo.startWeight : 'N/A'
          } kg</Text>
        </View>
        <AddButton userData={userInfo}/>
        <View>
          <Text style={[style.text, {color: themeTextColor}]}>Remaining</Text>
          <Text style={[{color: 'gray'}, style.text]}>{
            weightLossJourneyData.length > 0 ? weightLossJourneyData[weightLossJourneyData.length - 1].selectedWeight - userInfo.weightTarget : 'N/A'
          } kg</Text>
        </View>
      </View>
      <RandomPhrase />
      </ScrollView>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  goalsBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30
  },
  text: {fontWeight: 'bold', textAlign: 'center' },
  btnUI: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 30
  }
})