import { View, Text, StyleSheet, FlatList, VirtualizedList, Pressable, refreshControl, RefreshControl } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { allWeights } from '../helpers/Info';
import { InfoGetter } from '../helpers/InfoGetter';
import { useState } from 'react';


export const HistoryScreen = () => {
  const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();
  const {allWeights, getData} =  InfoGetter();

  const [refreshing, setRefreshing] = useState(false);

  const onRefresh= () => {
    setRefreshing(true)
    setTimeout(() => {
      getData();
      setRefreshing(false)
    }, 2000)
  }
  return (
    <View style={[style.container, { backgroundColor: themeBackgroundColor }]}>
      <VirtualizedList
        data={allWeights}
        initialNumToRender={10}
        keyExtractor={(item, index) => index.toString()}
        getItemCount={() => allWeights.length}
        getItem={(data, index) => data[index]}
        refreshControl={<RefreshControl onRefresh={onRefresh} refreshing={refreshing}/>}
        renderItem={({ item }) => (
          <Pressable style={style.historyData}>
            <Text style={{color: themeTextColor}}>{item.selectedWeight} kg</Text>
            <Text style={{color: themeTextColor}}>{`${new Date(item.date).getDate()}/${new Date(item.date).getMonth() + 1}/${new Date(item.date).getFullYear()}`}
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