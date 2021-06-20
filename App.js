import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
// import Tabbar from './component/Tabbar'
import Main from './screen/Main'
import AddWork from './screen/AddWork'
import Login from './screen/Login'
import Blue from './screen/Blue'
import Model from './screen/Model'
import Profile from './screen/Profile';
const TabIcon = (props) => {
  let textColor = props.focused ? '#ff5722' : '#999999'
  return (
    <>
      <Text style={{ color: textColor }}>{props.title}</Text>
    </>
  )
}

const App = () => {
  return (
    <>

      <Router >
        <Scene key="root" hideNavBar={true} >

          <Scene key="tabbar" showLabel={false} tabs={true} tabBarStyle={{ backgroundColor: '#fff' }}>

            <Scene key="addWork" component={AddWork} title="AddWork" icon={TabIcon} hideNavBar={true} initial={false} />
            <Scene key="login" component={Login} title="Login" icon={TabIcon} hideNavBar={true} initial={true} />
            <Scene key="Main" title='HOME'  component={Main} icon={TabIcon} hideNavBar={true} initial={false} />
            <Scene key="blue" component={Blue} title="Blue" icon={TabIcon} hideNavBar={true} initial={false} />
            <Scene key="profile" component={Profile} title="Profile" icon={TabIcon} hideNavBar={true} initial={false} />
          </Scene>
          <Scene key="model" component={Model} title="Model" direction="vertical" hideNavBar />
        </Scene>
      </Router>
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
  }

})

export default App

