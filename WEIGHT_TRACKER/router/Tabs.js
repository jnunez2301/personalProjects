import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons'
import { HomeScreen, BMRScreen, HistoryScreen, ProfileScreen, } from '../screens';
import { StatusBar, Text } from 'react-native';
import { useTheme } from '../context/ThemeProvider';

import { userInfo } from '../helpers/UserInfo';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
     const { themeColor, themeTextColor, themeBackgroundColor } = useTheme();

    return (
        <NavigationContainer>
            <StatusBar barStyle={'default'}/>
            <Tab.Navigator screenOptions={{
                headerStyle: {
                    backgroundColor: themeColor,
                },
                tabBarStyle: {
                    backgroundColor: themeColor,
                },
                headerTitleStyle: {
                    color: themeTextColor
                },
                tabBarLabelStyle: {
                    color: themeTextColor
                },
                headerRight: () => {
                    return (
                    <>
                    <Text style={{
                        color: themeTextColor,
                        marginRight: 16,
                        fontWeight: 'bold'
                    }}>{`${userInfo.alias}`}</Text>
                    </>)
                },
                tabBarActiveBackgroundColor: themeBackgroundColor
            }}>
                <Tab.Screen name="Home" component={HomeScreen}
                options={{
                    tabBarIcon: () => <Ionicons name='home' color={themeTextColor} size={20}/>
                }}/>
                <Tab.Screen name="TDEE" component={BMRScreen} 
                options={{
                    tabBarIcon: () => <Text style={{fontWeight: 'bold', 
                    color: themeTextColor}}>TDEE</Text>
                }}/>
                <Tab.Screen name="History" component={HistoryScreen} 
                options={{
                    tabBarIcon: () => <Ionicons name='document-text-sharp' color={themeTextColor} size={20}/>
                }}/>
                
                <Tab.Screen name="Profile" component={ProfileScreen} 
                options={{
                    tabBarIcon: () => <Ionicons name='person-circle-outline' color={themeTextColor} size={20}/>
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}