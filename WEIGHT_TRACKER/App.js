import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from "react-native";
import { Tabs } from "./router/Tabs";
import { ThemeProvider } from "./context/ThemeProvider";
import { useLayoutEffect, useState } from "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { NoInfo } from "./components/NoInfo";

export default function App() {

  const [userData, setUserData] = useState(null);

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('user_info');
      setUserData(JSON.parse(jsonValue))
    } catch (e) {
      console.error(error);
    }
  };


  useLayoutEffect(()=> {
    getData();
  }, [setUserData])

  
  
  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        { userData ? <Tabs userInfo={userData}/> : <NoInfo setUserData={setUserData}/>}
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
