import React, {useState,useEffect} from 'react'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Main from '../screen/Main'
import AddWork from '../screen/AddWork'
import Profile from '../screen/Profile';
import LoginV2 from '../screen/LoginV2';
import Mywork from '../screen/Mywork';
import SelectPost from '../screen/SelectPost';
const Tab = createMaterialBottomTabNavigator();
const Tabbar = ({ navigation }) => {
    const [data, setdata] = useState({
        Status: ""
    })
    useEffect(() => {
        onLoad()
        navigation.navigate('Main')
    }, []);
    const onLoad = async () => {
        const status = await AsyncStorage.getItem('status');
        setdata({ ...data, Status: status })
    }
    return (
        <Tab.Navigator
            initialRouteName="Main"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: '#fff' }}
        >
            <Tab.Screen
                name="Main"
                component={Main}
                options={{
                    tabBarLabel: 'Main',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="AddWork"
                component={AddWork}
                options={{
                    tabBarLabel: 'AddWork',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={LoginV2}
                options={{
                    tabBarLabel: 'LoginV2',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
        </Tab.Navigator>

    )
}

export default Tabbar
