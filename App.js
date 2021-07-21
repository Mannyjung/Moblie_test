import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Dimensions } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, MaterialIcons, AntDesign, FontAwesome5, Entypo, Ionicons } from '@expo/vector-icons';
// import Tabbar from './component/Tabbar'
import Main from './screen/Main'
import AddWork from './screen/AddWork'
import Profile from './screen/Profile';
import Login from './screen/LoginV2';
import Mywork from './screen/Mywork';
import Editpic from './component/Edit/Editpic';
import Editpack from './component/Edit/Editpack';
import Editwork from './component/Edit/Editwork';
import SelectPost from './screen/SelectPost';
import Addpack from './component/Edit/Addpackage';
import EmploymentFL from './screen/EmploymentFL';
import EmploymentEmp from './screen/EmploymentEmp';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const { width, hieght } = Dimensions.get('screen')
const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();


function NotLogin() {
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
                    tabBarLabel: 'หน้าหลัก',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-circle-outline" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Login"
                component={Login}
                options={{
                    tabBarLabel: 'เข้าสู่ระบบ',
                    tabBarIcon: ({ color }) => (
                        <AntDesign name="login" size={22} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
function Student() {
    return (
        <Tab.Navigator
            initialRouteName="Main"
            activeColor="#fff"
            barStyle={{ backgroundColor: '#ff5990' }}
        >
            <Tab.Screen
                name="Main"
                component={Main}
                options={{
                    tabBarLabel: 'หน้าหลัก',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-circle-outline" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Mywork"
                component={Mywork}
                options={{
                    tabBarLabel: 'Mywork',
                    tabBarIcon: ({ color }) => (
                        <Entypo name="network" size={22} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Employment"
                component={EmploymentFL}
                options={{
                    tabBarLabel: 'Employment',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="list-circle" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Addwork"
                component={AddWork}
                options={{
                    tabBarLabel: 'Addwork',
                    tabBarIcon: ({ color }) => (
                        <Ionicons name="md-add-circle" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="face-profile" size={26} color={color} />
                    ),
                }}
            />

        </Tab.Navigator>
    );
}
function Employer() {
    return (
        <Tab.Navigator
            initialRouteName="Main"
            activeColor="#e91e63"
            barStyle={{ backgroundColor: '#000' }}
        >
            <Tab.Screen
                name="Main"
                component={Main}
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="home-circle-outline" size={26} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Employment"
                component={EmploymentEmp}
                options={{
                    tabBarLabel: 'Employment',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Profile"
                component={Profile}
                options={{
                    tabBarLabel: 'Profile',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="face-profile" size={26} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const App = ({ navigation }) => {
    const [data, setdata] = useState({
        Status: ""
    })
    useEffect(() => {
        onLoad()
    }, []);
    const onLoad = async () => {
        const status = await AsyncStorage.getItem('status');
        setdata({ ...data, Status: status })
    }
    let status = data.Status
    return (
        <>
            {data.Status === 'Student' ?
                <NavigationContainer>
                    <Stack.Navigator screenOptions={{
                        headerShown: false
                    }}>
                        <Stack.Screen name="student" component={Student} />
                        <Stack.Screen name="employer" component={Employer} />
                        <Stack.Screen name="login" component={NotLogin} />
                        <Stack.Screen name="selectpost" component={SelectPost} />
                        <Stack.Screen name="editpic" component={Editpic} />
                        <Stack.Screen name="editpack" component={Editpack} />
                        <Stack.Screen name="editwork" component={Editwork} />
                        <Stack.Screen name="addpack" component={Addpack} />
                    </Stack.Navigator>


                </NavigationContainer> :
                data.Status === 'Employer' ?
                    <NavigationContainer>
                        <Stack.Navigator screenOptions={{
                            headerShown: false
                        }}>
                            <Stack.Screen name="employer" component={Employer} />
                            <Stack.Screen name="student" component={Student} />
                            <Stack.Screen name="login" component={NotLogin} />
                            <Stack.Screen name="selectpost" component={SelectPost} />

                        </Stack.Navigator>

                    </NavigationContainer> :
                    data.Status === null || '' ?
                        <NavigationContainer>
                            <Stack.Navigator screenOptions={{
                                headerShown: false
                            }}>
                                <Stack.Screen name="login" component={NotLogin} />
                                <Stack.Screen name="employer" component={Employer} />
                                <Stack.Screen name="student" component={Student} />
                                <Stack.Screen name="selectpost" component={SelectPost} />

                            </Stack.Navigator>
                        </NavigationContainer> :
                        null

            }
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ea3345',
        justifyContent: 'center',
        alignItems: 'center',

    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10
    },
    butt: {
        width: width / 5,
        justifyContent: 'center',
        alignItems: 'center'
    },
    viewicon: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#000000a0",

        padding: 20

    },
    viewin: {
        marginRight: 10,
        marginLeft: 10
    }


})

export default App