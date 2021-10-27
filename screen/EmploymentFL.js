import React, {useEffect,useState} from 'react'
import { Text, StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon , DefaultTabBar} from 'native-base';
import WaitEM from '../component/EmploymentFl/WaitEM';
import Working from '../component/EmploymentFl/Working';
import Success from '../component/EmploymentFl/Success';
import AsyncStorage from '@react-native-async-storage/async-storage';
const EmploymentFL = () => {
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
            <Header androidStatusBarColor="#ff5749" searchBar rounded style={styles.head} >
                <Text style={styles.text}>
                    การจ้างงาน
                </Text>
            </Header>
            <Tabs renderTabBar={renderTabBar}>
            <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>รอดำเนินการ</Text></TabHeading>}>
                    <WaitEM Userid={Userid} />
                </Tab>
            <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>ดำเนินการ</Text></TabHeading>}>
                    <Working Userid={Userid} />
                </Tab>
               
                
                <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>เสร็จสิ้น</Text></TabHeading>}>
                    <Success Userid={Userid} />
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

export default EmploymentFL
