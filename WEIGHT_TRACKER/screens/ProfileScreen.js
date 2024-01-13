import { View, Text, StyleSheet, TextInput } from 'react-native'
import { useTheme } from '../context/ThemeProvider'
import { userInfo } from '../helpers/UserInfo';
import Ionicons from '@expo/vector-icons/Ionicons';


export const ProfileScreen = () => {
  const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();
  
  
  return (
    <View style={[style.container, { backgroundColor: themeBackgroundColor }]}>
      <View style={[style.inputCardContainer]}>
        <Text style={{color: themeTextColor, fontSize: 24, marginBottom: 10, fontWeight: 'bold'}}>Settings</Text>
        <View style={style.inputCard}>
          <TextInput 

          keyboardType='numeric'
          placeholder='Age'
          textAlign='center'
          placeholderTextColor={themeTextColor}
          style={[style.textInput, {borderColor: themeTextColor, color: themeTextColor}]}/>
          <Ionicons name='calculator' size={30} color={themeTextColor}/>
        </View>
        <View style={style.inputCard}>
          <TextInput placeholder='Height'
          keyboardType='numeric'
          placeholderTextColor={themeTextColor}
          style={[style.textInput, {borderColor: themeTextColor, color: themeTextColor}]}/>
          <Text style={{color: themeTextColor, 
          fontWeight: 'bold'}}>cm</Text>
        </View>
        <View style={[style.inputCard]}>
          <TextInput 
          keyboardType='numeric'
          placeholder='Target Weight'
          placeholderTextColor={themeTextColor}
          style={[style.textInput, {borderColor: themeTextColor, color: themeTextColor}]}/>
          <Text style={{color: themeTextColor, textAlign: 'center', fontWeight: 'bold'}}>kg</Text>
        </View>
      </View>
    </View>
  )
}


const style = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30
  },
  textInput: {
    borderWidth: 1,
    height: 40,
    width: 240,
    marginRight: 10,
    padding: 5,
    borderRadius: 5,
    textAlign: 'center',
  },
  inputCard: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'center'
  },
  inputCardContainer: {
    justifyContent: 'center',
    
  }
})