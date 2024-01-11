import { View, Text, StyleSheet, SafeAreaView } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { ChartContainer } from '../components/ChartContainer';
import { weightLossJourneyData } from '../helpers/Info';
import { AddButton } from '../components/AddButton';
import { userInfo } from '../helpers/UserInfo';
import { RandomPhrase } from '../components/RandomPhrase';



export const HomeScreen = () => {
  const { themeBackgroundColor, themeTextColor } = useTheme();
  const changeWeight = weightLossJourneyData[0].weight - weightLossJourneyData[weightLossJourneyData.length -1 ].weight;
  

  return (
    <SafeAreaView style={[style.container, { backgroundColor: themeBackgroundColor }]}>
      <View style={style.goalsBar}>
        <View>
          <Text style={[{ color: themeTextColor}, style.text]}>Start</Text>
          <Text style={[{ color: 'gray'}, style.text]}>{userInfo.startWeight} kg</Text>
        </View>    
        <View>
          <Text style={[{ color: themeTextColor}, style.text]}>Current</Text>
          <Text style={[{ color: 'blue'}, style.text]}>{weightLossJourneyData && weightLossJourneyData[weightLossJourneyData.length -1].weight} kg</Text>
        </View>
        <View>
          <Text style={[{ color: themeTextColor}, style.text]}>Target</Text>
          <Text style={[{ color: 'gray'}, style.text]}>{ userInfo.weightTarget } kg</Text>
        </View>
      </View>
      <ChartContainer />
      <View style={style.btnUI}>
        <View>
          <Text style={[style.text, {color: themeTextColor}]}>Change</Text>
          <Text style={[{color: 'gray'}, style.text]}>{changeWeight} kg</Text>
        </View>
        <AddButton />
        <View>
          <Text style={[style.text, {color: themeTextColor}]}>Remaining</Text>
          <Text style={[{color: 'gray'}, style.text]}>{weightLossJourneyData[weightLossJourneyData.length - 1].weight - userInfo.weightTarget} kg</Text>
        </View>
      </View>
      <RandomPhrase />
      </SafeAreaView>
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