import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from "react-native";
import { Tabs } from "./router/Tabs";

export default function App() {
  const colorScheme = useColorScheme();

  const lightModeBackgroundColor = '#ffffff';
  const darkModeBackgroundColor = '#000000';
  

  const backgroundColor = colorScheme === 'dark' ? darkModeBackgroundColor : lightModeBackgroundColor;

  return (
    <SafeAreaView style={[styles.container, { backgroundColor }]}>
      <Tabs />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* padding: StatusBar.currentHeight, */
  },
});
