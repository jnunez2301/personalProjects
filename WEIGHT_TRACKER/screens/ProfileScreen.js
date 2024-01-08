import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../context/ThemeProvider'



export const ProfileScreen = () => {
  const { themeBackgroundColor, themeTextColor } = useTheme();
  return (
    <View style={[style.container,{ backgroundColor: themeBackgroundColor}]}>
        <Text style={{color: themeTextColor}}>HistoryScreen</Text>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
  }
})