import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, BMRScreen, HistoryScreen, ProfileScreen } from '../screens';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
    return(
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="BMR" component={BMRScreen}/>
                <Tab.Screen name="History" component={HistoryScreen}/>
                <Tab.Screen name="Profile" component={ProfileScreen}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}