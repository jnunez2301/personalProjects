import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../context/ThemeProvider'



export const BMRScreen = () => {
  const { themeBackgroundColor,themeTextColor } = useTheme();
  return (
    <View style={[style.container,{ backgroundColor: themeBackgroundColor, }]}>
        <Text style={{color: themeTextColor}}>BMRScreen</Text>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})