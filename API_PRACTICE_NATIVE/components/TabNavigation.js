import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, MealsScreen, RandomUserScreen } from '../screens/';
import Ionicons from "@expo/vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export const TabNavigation = () => {
  return (
    <NavigationContainer>
        <Tab.Navigator>
            <Tab.Screen name="HomeScreen" component={HomeScreen} options={{
              tabBarIcon: () => {
                return (<Ionicons name='md-home' size={20}/>)
              },
              tabBarActiveBackgroundColor: 'lightgrey'
            }}/>
            <Tab.Screen name="MealsScreen" component={MealsScreen}
            options={{
              tabBarIcon: () => {
                return (<Ionicons name='md-pie-chart'/>)
              },
              tabBarActiveBackgroundColor: 'lightgrey'
            }}
            
             color={'orangered'}/>
            <Tab.Screen name='RandomUserScreen' component={RandomUserScreen} options={{
              tabBarIcon: () => {
                return (<Ionicons name='woman' size={20} />)
              },
              tabBarActiveBackgroundColor: 'lightgrey'
            }}/>
          </Tab.Navigator>
    </NavigationContainer>
  )
}
