import { View, Text, StyleSheet } from 'react-native'
import { useTheme } from '../context/ThemeProvider'



function calculateBMR(weight, height, age, gender) {
  if (gender.toLowerCase() === 'male') {
      return 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
  } else if (gender.toLowerCase() === 'female') {
      return 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
  } else {
      console.error('Invalid gender input. Please use "male" or "female".');
      return null;
  }
}

/* // Example usage
let bmr = calculateBMR(70, 175, 25, 'male');
console.log('BMR:', bmr); */


export const BMRScreen = () => {
  const { themeBackgroundColor,themeTextColor } = useTheme();
  return (
    <View style={[style.container,{ backgroundColor: themeBackgroundColor, }]}>
        <Text>BMR</Text>
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