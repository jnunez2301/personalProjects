import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../screens';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" 
            component={HomeScreen} 
            options={{
              
            }}/>
        </Tab.Navigator>
    </NavigationContainer>
  )
}
