import React from 'react'
import { Text, StyleSheet } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon } from 'native-base';
import WaitEM from '../component/Employment/WaitEM';
import Working from '../component/Employment/Working';
import Success from '../component/Employment/Success';
const Employment = () => {
    return (
        <Container>
            <Header androidStatusBarColor="#ff5749" searchBar rounded style={styles.head} >
                <Text style={styles.text}>
                    การจ้างงาน
                </Text>
            </Header>
            <Tabs >
                <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>รอดำเนินการ</Text></TabHeading>}>
                    <WaitEM />
                </Tab>
                <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>กำลังดำเนินการ</Text></TabHeading>}>
                    <Working />
                </Tab>
                <Tab heading={<TabHeading style={styles.head}><Text style={styles.text}>เสร็จสิ้น</Text></TabHeading>}>
                    <Success />
                </Tab>
            </Tabs>
        </Container>
    )
}
const styles = StyleSheet.create({
    head: {
        backgroundColor: '#ff5749',
    },
    text:{
        fontSize:20,
        color:"#ffff"
    }
})

export default Employment
