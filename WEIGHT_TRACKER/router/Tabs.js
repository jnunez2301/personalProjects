import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen, BMRScreen, HistoryScreen, ProfileScreen, } from '../screens';
import { StatusBar, Text } from 'react-native';
import { useTheme } from '../context/ThemeProvider';

import { userInfo } from '../helpers/UserInfo';

const Tab = createBottomTabNavigator();

export const Tabs = () => {
     const { themeColor, themeTextColor } = useTheme();

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
                }
            }}>
                <Tab.Screen name="Home" component={HomeScreen}/>
                <Tab.Screen name="BMR" component={BMRScreen} />
                <Tab.Screen name="History" component={HistoryScreen} />
                <Tab.Screen name="Profile" component={ProfileScreen} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}