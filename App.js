import { StatusBar } from 'expo-status-bar';
import React from 'react'
import { View, Text, FlatList, StyleSheet } from 'react-native'
import { Router, Scene } from 'react-native-router-flux'
// import Tabbar from './component/Tabbar'
import Main from './screen/Main'
import AddWork from './screen/AddWork'
import Model from './screen/Model'
import Profile from './screen/Profile';
import LoginV2 from './screen/LoginV2';
import Mywork from './screen/Mywork';
import Editpic from './component/Edit/Editpic';
import Editpack from './component/Edit/Editpack';
import Editwork from './component/Edit/Editwork';
import SelectPost from './screen/SelectPost';
import Addpack from './component/Edit/Addpackage';
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
            <Scene key="loginV2" component={LoginV2} title="LoginV2" icon={TabIcon} hideNavBar={true} initial={false} />
            <Scene key="main" title='HOME' component={Main} icon={TabIcon} hideNavBar={true} initial={false} />
            <Scene key="mywork" component={Mywork} title="Mywork" icon={TabIcon} hideNavBar={true} initial={false} />
            <Scene key="profile" component={Profile} title="Profile" icon={TabIcon} hideNavBar={true} initial={false} />
          </Scene>
          <Scene key="model" component={Model} title="Model" direction="vertical" hideNavBar />
          <Scene key="editpic" component={Editpic} title="Editpic" icon={TabIcon} hideNavBar={true} initial={false} />
          <Scene key="editpack" component={Editpack} title="Editpack" icon={TabIcon} hideNavBar={true} initial={false} />
          <Scene key="editwork" component={Editwork} title="Editwork" icon={TabIcon} hideNavBar={true} initial={false} />
          <Scene key="selectpost" component={SelectPost} title="SelectPost" icon={TabIcon} hideNavBar={true} initial={false} />
          <Scene key="addpack" component={Addpack} title="Addpack" icon={TabIcon} hideNavBar={true} initial={false} />
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

