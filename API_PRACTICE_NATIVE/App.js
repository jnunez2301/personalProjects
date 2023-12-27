import { SafeAreaView, Text, View } from 'react-native';
import styles from './styles';
import { TabNavigation } from './components/TabNavigation';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <TabNavigation />
    </SafeAreaView>
  );
}

