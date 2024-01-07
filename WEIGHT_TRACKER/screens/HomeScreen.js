import { View, Text, StyleSheet } from 'react-native'

export const HomeScreen = () => {
  return (
    <View style={style.container}>
        <Text>HomeScreen</Text>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1
  }
})