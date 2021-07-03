import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'


import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialCommunityIcons, AntDesign, FontAwesome5 } from '@expo/vector-icons';
// import Tabbar from './component/Tabbar'
import Main from './screen/Main'
import AddWork from './screen/AddWork'
import Profile from './screen/Profile';
import LoginV2 from './screen/LoginV2';
import Mywork from './screen/Mywork';
import Editpic from './component/Edit/Editpic';
import Editpack from './component/Edit/Editpack';
import Editwork from './component/Edit/Editwork';
import SelectPost from './screen/SelectPost';
import Addpack from './component/Edit/Addpackage';
import Employment from './screen/Employment';




const iMain = (props) => {
  let textColor = props.focused ? '#ff5722' : '#999999'
  return (
    <>
      <MaterialCommunityIcons name="home-circle-outline" size={24} style={{ color: textColor }} />
      <Text style={{ color: textColor }}>{props.title}</Text>
    </>
  )
}
const iProfile = (props) => {
  let textColor = props.focused ? '#ff5722' : '#999999'
  return (
    <>
      <MaterialCommunityIcons name="face-profile" size={24} style={{ color: textColor }} />
      <Text style={{ color: textColor }}>{props.title}</Text>
    </>
  )
}
const iAddWork = (props) => {
  let textColor = props.focused ? '#ff5722' : '#999999'
  return (
    <>
      <FontAwesome5 name="creative-commons-sampling-plus" size={24} style={{ color: textColor }} />
      <Text style={{ color: textColor }}>{props.title}</Text>
    </>
  )
}
const iLoginV2 = (props) => {
  let textColor = props.focused ? '#ff5722' : '#999999'
  return (
    <>
      <AntDesign name="login" size={20} style={{ color: textColor }} />
      <Text style={{ color: textColor }}>{props.title}</Text>
    </>
  )
}
const iEmployment = (props) => {
  let textColor = props.focused ? '#ff5722' : '#999999'
  return (
    <>
      <AntDesign name="login" size={20} style={{ color: textColor }} />
      <Text style={{ color: textColor }}>{props.title}</Text>
    </>
  )
}


const App = () => {
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

  return (

    <Router >
      {
        data.Status == 'Employer' ?
          <Scene key="root" hideNavBar={true} >
            <Scene key="tabbar" showLabel={false} tabs={true} tabBarStyle={{ backgroundColor: '#fff' }}>
              <Scene key="main" title='HOME' component={Main} icon={iMain} hideNavBar={true} initial={true} />
              <Scene key="profile" component={Profile} title="Profile" icon={iProfile} hideNavBar={true} initial={false} />
            </Scene>
            <Scene key="selectpost" component={SelectPost} title="SelectPost" hideNavBar={true} initial={false} />
          </Scene>
          :
          data.Status == 'Student' ?
            <Scene key="root" hideNavBar={true} >
              <Scene key="tabbar" showLabel={false} tabs={true} tabBarStyle={{ backgroundColor: '#fff' }}>
                <Scene key="addWork" component={AddWork} title="AddWork" icon={iAddWork} hideNavBar={true} initial={false} />
                <Scene key="main" title='HOME' component={Main} icon={iMain} hideNavBar={true} initial={true} />
                <Scene key="profile" component={Profile} title="Profile" icon={iProfile} hideNavBar={true} initial={false} />
              </Scene>
              <Scene key="mywork" component={Mywork} title="Mywork" hideNavBar={true} initial={false} />
              <Scene key="editpic" component={Editpic} title="Editpic" hideNavBar={true} initial={false} />
              <Scene key="editpack" component={Editpack} title="Editpack" hideNavBar={true} initial={false} />
              <Scene key="editwork" component={Editwork} title="Editwork" hideNavBar={true} initial={false} />
              <Scene key="selectpost" component={SelectPost} title="SelectPost" hideNavBar={true} initial={false} />
              <Scene key="addpack" component={Addpack} title="Addpack" hideNavBar={true} initial={false} />
            </Scene>
            : data.Status == '' ?
              <Scene key="root" hideNavBar={true} >
                <Scene key="tabbar" showLabel={false} tabs={true} tabBarStyle={{ backgroundColor: '#fff' }}>
                  <Scene key="loginV2" component={LoginV2} title="LoginV2" icon={iLoginV2} hideNavBar={true} initial={false} />
                  <Scene key="main" title='HOME' component={Main} icon={iMain} hideNavBar={true} initial={true} />
                </Scene>
                <Scene key="selectpost" component={SelectPost} title="SelectPost" hideNavBar={true} initial={false} />
              </Scene>
              :
              <Scene key="root" hideNavBar={true} >
                <Scene key="tabbar" showLabel={false} tabs={true} tabBarStyle={{ backgroundColor: '#fff' }}>
                  <Scene key="addWork" component={AddWork} title="AddWork" icon={iAddWork} hideNavBar={true} initial={false} />
                  <Scene key="loginV2" component={LoginV2} title="LoginV2" icon={iLoginV2} hideNavBar={true} initial={false} />
                  <Scene key="employment" component={Employment} title="Employment" icon={iEmployment} hideNavBar={true} initial={false} />
                  <Scene key="main" title='HOME' component={Main} icon={iMain} hideNavBar={true} initial={true} />
                  <Scene key="profile" component={Profile} title="Profile" icon={iProfile} hideNavBar={true} initial={false} />
                </Scene>
                <Scene key="mywork" component={Mywork} title="Mywork" hideNavBar={true} initial={false} />
                <Scene key="editpic" component={Editpic} title="Editpic" hideNavBar={true} initial={false} />
                <Scene key="editpack" component={Editpack} title="Editpack" hideNavBar={true} initial={false} />
                <Scene key="editwork" component={Editwork} title="Editwork" hideNavBar={true} initial={false} />
                <Scene key="selectpost" component={SelectPost} title="SelectPost" hideNavBar={true} initial={false} />
                <Scene key="addpack" component={Addpack} title="Addpack" hideNavBar={true} initial={false} />
              </Scene>
      }
    </Router>

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
  }

})

export default App

