import { Text, StyleSheet, RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import React, { useState, useEffect } from 'react'
import WaitFree from '../component/EmploymentEmp/WaitFree';
import WorkEmp from '../component/EmploymentEmp/WorkEmp';
import SucEmp from '../component/EmploymentEmp/SucEmp';
import AsyncStorage from '@react-native-async-storage/async-storage';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
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

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                contentContainerStyle={styles.scrollView}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }
            >
                <Container>
                    <Header androidStatusBarColor="#ff5749" searchBar rounded style={styles.head} transparent>
                        <Text style={styles.text}>
                            การจ้างงาน
                        </Text>
                    </Header>
                    <Tabs >
                        <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>รอดำเนินการ</Text></TabHeading>}>
                            <WaitFree Userid={Userid} />
                        </Tab>
                        <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>กำลังดำเนินการ</Text></TabHeading>}>
                            <WorkEmp Userid={Userid} />
                        </Tab>
                        <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>เสร็จสิ้น</Text></TabHeading>}>
                            <SucEmp Userid={Userid} />
                        </Tab>
                    </Tabs>
                </Container>
            </ScrollView>
        </SafeAreaView>

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
