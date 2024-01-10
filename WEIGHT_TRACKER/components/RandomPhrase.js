import { View, Text, StyleSheet } from 'react-native'

import { diet_phrases } from '../helpers/DietPhrases'
import { useLayoutEffect } from 'react'
import { useTheme } from '../context/ThemeProvider'

export const RandomPhrase = () => {


  const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();

  let phrase = 'Loading phrases...'
  useLayoutEffect(() => {
     phrase = diet_phrases[Math.floor(Math.random()*diet_phrases.length)];
    
  }, [])
  
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
      fontWeight: 'bold'
    }
})
