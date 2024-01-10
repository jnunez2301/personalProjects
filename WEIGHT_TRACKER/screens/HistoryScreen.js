import { View, Text, StyleSheet, FlatList, VirtualizedList, Pressable } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { allWeights } from '../helpers/Info';



export const HistoryScreen = () => {
  const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();
  return (
    <View style={[style.container, { backgroundColor: themeBackgroundColor }]}>
      <VirtualizedList
        data={allWeights}
        initialNumToRender={10}
        keyExtractor={(item) => item.date.toString()} // Use keyExtractor for a string key
        getItemCount={() => allWeights.length}
        getItem={(data, index) => data[index]}
        renderItem={({ item }) => (
          <Pressable style={style.historyData}>
            <Text style={{color: themeTextColor}}>{item.weight} kg</Text>
            <Text style={{color: themeTextColor}}>{`${item.date.getDate()}/${item.date.getMonth()}/${item.date.getFullYear()}`}
            
            </Text>
          </Pressable>
        )}
      />

    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  },
  historyData: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderBottomWidth: 1,
    borderColor: 'plum',
    padding: 10,
    margin: 5
  }
})