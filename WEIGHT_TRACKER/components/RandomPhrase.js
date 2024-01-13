import { View, Text, StyleSheet } from 'react-native'

import { diet_phrases } from '../helpers/DietPhrases'
import { useLayoutEffect, useState } from 'react'
import { useTheme } from '../context/ThemeProvider'

export const RandomPhrase = () => {


  const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();
  const [phrase, setPhrase] = useState('Your meals choices must be something that you enjoy!');


  useLayoutEffect(() => {
    const newPhrase = () => {
    setPhrase(diet_phrases[Math.floor(Math.random() * diet_phrases.length)]);
    };

    const intervalId = setInterval(newPhrase, 10000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [diet_phrases])
  
  return (
    <View style={[styles.container, {backgroundColor: themeColor}]}>
        <Text style={[{color: themeTextColor }, styles.text]}>{phrase}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        margin: 10,
    },
    text: {
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
      margin: 30
    }
})
