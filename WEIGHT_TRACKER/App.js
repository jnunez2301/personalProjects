import { SafeAreaView, StatusBar, StyleSheet, useColorScheme } from "react-native";
import { Tabs } from "./router/Tabs";
import { ThemeProvider } from "./context/ThemeProvider";

export default function App() {

  return (
    <ThemeProvider>
      <SafeAreaView style={styles.container}>
        <Tabs/>
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
