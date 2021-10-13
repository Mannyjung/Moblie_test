import { Text, StyleSheet, RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, DefaultTabBar } from 'native-base';
import React, { useState, useEffect } from 'react'
import WaitFree from '../component/EmploymentEmp/WaitFree';
import WorkEmp from '../component/EmploymentEmp/WorkEmp';
import SucEmp from '../component/EmploymentEmp/SucEmp';
import AsyncStorage from '@react-native-async-storage/async-storage';


const EmploymentEmp = () => {
    const [data, setdata] = useState({
        User_id: "",
    })
    useEffect(() => {
        onLoad()

    }, []);
    const onLoad = async () => {
        const User_id = await AsyncStorage.getItem('User_id');
        setdata({ ...data, User_id: User_id })
    }
    let Userid = data.User_id

    const renderTabBar = (props) => {
        props.tabStyle = Object.create(props.tabStyle);
        return <DefaultTabBar {...props} />;
    };

    return (

        <Container>
            <Header androidStatusBarColor="#ff5749" searchBar rounded style={styles.head} transparent>
                <Text style={styles.text}>
                    การจ้างงาน
                </Text>
            </Header>
            <Tabs renderTabBar={renderTabBar}>

                <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>รอดำเนินการ</Text></TabHeading>}>
                    <WaitFree Userid_w={Userid} />
                </Tab>

                <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>ดำเนินการ</Text></TabHeading>}>
                    <WorkEmp Userid_r={Userid} />
                </Tab>


                <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>เสร็จสิ้น</Text></TabHeading>}>
                    <SucEmp Userid_s={Userid} />
                </Tab>
            </Tabs>
        </Container>


    )
}
const styles = StyleSheet.create({
    head: {
        backgroundColor: '#ff5749',
    },
    text: {
        fontSize: 20,
        color: "#ffff"
    }
})

export default EmploymentEmp
