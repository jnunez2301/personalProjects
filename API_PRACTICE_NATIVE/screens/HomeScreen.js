import { View, Text } from 'react-native'
import 'react-native-gesture-handler';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeOptions } from '../components/HomeOptions';
import { Details} from '../components/Details'
import { RickAndMorty } from '../components/apis/RickAndMorty';
import { Meals } from '../components/apis/Meals';
import { AnimeApi } from '../components/apis/AnimeApi';

const Stack = createStackNavigator();

export const HomeScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeOptions} options={{
        headerShown: false
      }}/>
      {/* <Stack.Screen name="Details" component={Details} options={{
        headerShown: false
      }}/> */}
      <Stack.Screen name="Rick" component={RickAndMorty} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Meals" component={Meals} options={{
        headerShown: false
      }}/>
      <Stack.Screen name="Anime" component={AnimeApi} options={{
        headerShown: false
      }}/>
    </Stack.Navigator>
  )
}
