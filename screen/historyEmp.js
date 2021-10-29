import { Text, StyleSheet, RefreshControl, SafeAreaView, ScrollView, Alert } from 'react-native';
import { Container, Header, Tab, Tabs, TabHeading, Icon, Content, Card, CardItem, Body, Right, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Api from '../api/Api';
// const { width, } = Dimensions.get('screen')
import AsyncStorage from '@react-native-async-storage/async-storage';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const historyEmp = () => {

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

    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        reload()
        wait(2000).then(() => setRefreshing(false));
    };

    //console.log(Userid);
    const [historyEmp, sethistoryEmp] = useState([]);
    useEffect(() => {
        Api.get("employmentEpySucAndReview/" + Userid)
            .then((response) => {
                sethistoryEmp(response.data)
                //console.log(historyEmp);
            })
    }, [Userid])

    const reload = () => {
        Api.get("employmentEpySucAndReview/" + Userid)
          .then(response => {
            sethistoryEmp(response.data)
          })
          .catch(error => {
            console.log(error);
          });
      }
    const show_comment = (emm_review) =>
        Alert.alert(
            "รีวิว",
            emm_review,
            [
                // {
                //   text: "Cancel",
                //   onPress: () => console.log("Cancel Pressed"),
                //   style: "cancel"
                // },
                { text: "ตกลง" }
            ]
        );


    return (
        <>

            <Header androidStatusBarColor="#ff5749" searchBar rounded style={styles.head} >
                <Text style={styles.textH}>
                    ประวัติการจ้างงาน
                </Text>
            </Header>

            <SafeAreaView>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
             <Content padder>
                 
             </Content>
                  </ScrollView>
            </SafeAreaView>
                    <Content padder>
                        {historyEmp.map((historyEmp, index) => {
                            return (
                                <Card key={index} style={{marginBottom:"5%"}}>
                                    <CardItem header bordered>
                                        <Body>
                                            <Text style={styles.text}>
                                                ฟรีแลนซ์
                                            </Text>
                                            <Text style={styles.content}>
                                                : {historyEmp.emm_std_id}
                                            </Text>
                                        </Body>

                                        <Body>
                                            <Text style={styles.text}>
                                                วันที่
                                            </Text>
                                            <Text style={styles.content}>
                                                {historyEmp.emm_date_time}
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Body>
                                            <Text style={styles.text}>
                                                ชื่องาน
                                            </Text>
                                            <Text style={styles.content}>
                                                {historyEmp.aw_name}
                                            </Text>
                                        </Body>
                                        <Body>
                                            <Text style={styles.text}>
                                                ชื่อแพ็คเก็จ
                                            </Text>
                                            <Text style={styles.content}>
                                                {historyEmp.pk_name}
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem bordered>
                                        <Body>
                                            <Text style={styles.text}>
                                                สถานะ
                                            </Text>
                                            <Text style={styles.content}>
                                                {historyEmp.emm_status}
                                            </Text>
                                        </Body>
                                        <Right>
                                            <Button style={styles.butt} onPress={() => show_comment(historyEmp.emm_review)} >
                                                <Text style={{ color: '#fff' }}>
                                                    ดูรีวิว
                                                </Text>
                                            </Button>
                                        </Right>
                                    </CardItem>
                                </Card>
                            )
                        })}
                    </Content>
              
        </>
    )
}
const styles = StyleSheet.create({
    head: {
        backgroundColor: '#ff5749',
    },
    textH: {
        marginTop: 2,
        fontSize: 20,
        color: '#ffff',
    },
    text: {
        fontSize: 15,
        color: '#ff5722',
    },
    content: {
        fontSize: 17,
        paddingLeft: 6,
        paddingRight: 8,
        marginBottom : 5
    },
    content: {
        fontSize: 17,
        paddingLeft: 6,
        paddingRight: 8
    },
    butt: {
        padding: 10,
        height: -5,
        // width: width / 2.5,
        backgroundColor: '#559999',
    },
})

export default historyEmp
