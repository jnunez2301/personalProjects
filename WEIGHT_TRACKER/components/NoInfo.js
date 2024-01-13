import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useTheme } from '../context/ThemeProvider';

export const NoInfo = ({ setUserData }) => {
  const [userInfo, setUserInfo] = useState({
    weightTarget: '',
    age: '',
    user_height: '',
    alias: '',
    startWeight: '',
  });
  const [errorAlert, setErrorAlert] = useState('')
  const {themeColor, themeTextColor, themeBackgroundColor, colorScheme} = useTheme();

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem('user_info', jsonValue);
      setUserData(jsonValue)
    } catch (e) {
      // saving error
      console.log(e);
    }
  };

  const handleInputChange = (key, value) => {
    setUserInfo((prevUserData) => ({
      ...prevUserData,
      [key]: value,
    }));
  };

  const handleSave = () => {
    if(userInfo.age.length === 0 || userInfo.alias.length == 0 || userInfo.startWeight.length == 0 || userInfo.user_height.length == 0 || userInfo.weightTarget.length == 0 ){
        setErrorAlert('Please make sure all fields are filled')
        return;
    }
    storeData(userInfo);
  };

  const textStyle = {color: themeTextColor, fontSize: 18,
    fontWeight: 'bold', marginBottom: 5}
  return (
    <View style={[styles.container, {backgroundColor: themeColor}]}>
      <Text style={[textStyle, {fontSize: 30, marginBottom: 10}]}>🏋️ Weight Tracker 🏋️</Text>
      <Text style={{color: 'gray', margin: 30, textAlign: 'center'}}>This info will be private and will only be stored on your phone, this info will be just used for the app to work properly.</Text>

      {errorAlert.length > 0 && 
      <Text style={[textStyle, {color: 'red'}]}>
        {errorAlert}
      </Text>}

      <Text style={textStyle}>User Height</Text>
      <TextInput
        value={userInfo.user_height.toString()}
        onChangeText={(text) => handleInputChange('user_height', text)}
        keyboardType="numeric"
        placeholderTextColor={colorScheme === 'dark' ? 'gray' : 'gray'}
        placeholder='Your start height in cm'
        style={[styles.inputContainer, {borderColor: `${colorScheme === 'dark' ? 'gray' : 'gray'}`}, {color: themeTextColor}]}
        autoComplete='off'
        />
      <Text style={textStyle}>Age</Text>
      <TextInput
      placeholderTextColor={colorScheme === 'dark' ? 'gray' : 'gray'}
      placeholder='Your current Age'
      style={[styles.inputContainer, {borderColor: `${colorScheme === 'dark' ? 'gray' : 'gray'}`}, {color: themeTextColor}]}
        value={userInfo.age.toString()}
        onChangeText={(text) => handleInputChange('age', text)}
        keyboardType="numeric"
        autoComplete='off'
      />

      <Text style={textStyle}>Alias:</Text>
      <TextInput
        value={userInfo.alias}
        onChangeText={(text) => handleInputChange('alias', text)}
        placeholderTextColor={colorScheme === 'dark' ? 'gray' : 'gray'}
        placeholder='Your name/alias however you feel comfy'
        style={[styles.inputContainer, {borderColor: `${colorScheme === 'dark' ? 'gray' : 'gray'}`}, {color: themeTextColor}]}
        autoComplete='off'
      />

      <Text style={textStyle}>Start Weight:</Text>
      <TextInput
        value={userInfo.startWeight.toString()}
        onChangeText={(text) => handleInputChange('startWeight', text)}
        keyboardType="numeric"
        placeholderTextColor={colorScheme === 'dark' ? 'gray' : 'gray'}
        placeholder='Your starting weight on kg'
        style={[styles.inputContainer, {borderColor: `${colorScheme === 'dark' ? 'gray' : 'gray'}`}, {color: themeTextColor}]}
        autoComplete='off'
      />
      <Text style={textStyle}>Weight Target</Text>
      <TextInput
        placeholderTextColor={colorScheme === 'dark' ? 'gray' : 'gray'}
        style={[styles.inputContainer, {borderColor: `${colorScheme === 'dark' ? 'gray' : 'gray'}`}, {color: themeTextColor}]}
        placeholder='Your target weight on kg'
        value={userInfo.weightTarget.toString()}
        onChangeText={(text) => handleInputChange('weightTarget', text)}
        keyboardType="numeric"
        autoComplete='off'
      />
      <Pressable onPress={handleSave}
      style={styles.btnCircle}
      onFocus={{color: 'plum'}}
      >
        <Text style={[{textAlign: 'center', justifyContent: 'center',alignItems: 'center', fontSize: 25, color: 'white'}]}>
          +
        </Text>
    </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderWidth: 1,
        padding: 5,
        width: 250,
        borderRadius: 5,
        marginBottom: 10,
        
    },
    btnCircle: {
        borderRadius: 100,
        height: 60,
        width: 60,
        flexDirection: 'row',
        backgroundColor: 'plum',
        justifyContent: 'center',
        alignItems: 'center'
    },
})