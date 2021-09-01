import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Dimensions, Alert, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Left, Right, Button } from "native-base";

import axios from 'axios';
import Api from '../../api/Api'
const { width, height } = Dimensions.get('screen')

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const WorkEmp = ({ Userid }) => {

    const [refreshing, setRefreshing] = useState(false);
    const [getworkingemp, setGetworkingemp] = useState([])

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        reload()
        wait(2000).then(() => setRefreshing(false));
    }, []);

    useEffect(() => {
        Api.get("employmentEpyProgress/" + Userid)
            .then(response => {
                setGetworkingemp(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, [Userid]);

    const reload = () => {
        Api.get("employmentEpyProgress/" + Userid)
            .then(response => {
                setGetworkingemp(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }

    const showConfirm = async (emm_id) => {
        await Alert.alert(
            "ยืนยันการเสร็จสิ้นของงาน",
            "งานที่คุณจ้างเสร็จสิ้นแล้วหรือไม่ ?",
            [
                {
                    text: "ยกเลิก",
                    //onPress: () => console.log(emm_id),
                    style: "cancel"
                },
                {
                    text: "ตกลง",
                    onPress: () => EmpSuc(emm_id)
                }
            ]
        )
    };
    const EmpSuc = async (emm_id) => {
        let data = {
            emm_status: "Success",
        }
        await axios.put("https://newapi-flashwork.herokuapp.com/public/successFromEpy/" + emm_id, data)
            .then((response) => {
                console.log(response.data.message);
                if (response.data.message === "success") {
                    Alert.alert("การจ้างงานเสร็จสิ้น")
                    reload()
                }
            });
    };
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

                <Content padder>
                    {getworkingemp.map((getworking, index) => {
                        return (
                            <Card key={index}>
                                <CardItem header bordered>
                                    <Body>
                                        <Text style={styles.text}>
                                            ฟรีแลนซ์
                                        </Text>
                                        <Text style={styles.content}>
                                            : {getworking.emm_std_id}
                                        </Text>
                                    </Body>

                                    <Body>
                                        <Text style={styles.text}>
                                            วันที่
                                        </Text>
                                        <Text style={styles.content}>
                                            {getworking.emm_date_time}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={styles.text}>
                                            ชื่องาน
                                        </Text>
                                        <Text style={styles.content}>
                                            {getworking.aw_name}
                                        </Text>
                                    </Body>
                                    <Body>
                                        <Text style={styles.text}>
                                            ชื่อแพ็คเก็จ
                                        </Text>
                                        <Text style={styles.content}>
                                            {getworking.pk_name}
                                        </Text>
                                    </Body>
                                </CardItem>
                                <CardItem bordered>
                                    <Body>
                                        <Text style={styles.text}>
                                            สถานะ
                                        </Text>
                                        <Text style={styles.content}>
                                            {getworking.emm_status}
                                        </Text>
                                    </Body>
                                    <Right>
                                        <Button style={styles.butt} onPress={() => showConfirm(getworking.emm_id)}>
                                            <Text style={{ color: '#fff' }}>
                                                เสร็จสิ้น
                                            </Text>
                                        </Button>
                                    </Right>
                                </CardItem>
                            </Card>
                        )
                    })}
                </Content>

            </ScrollView>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    text: {
        fontSize: 15,
        color: '#ff5722',
    },
    content: {
        fontSize: 17,
        paddingLeft: 6,
        paddingRight: 8
    },
    butt: {
        padding: 10,
        height: -5,
        width: width / 2.5,
        backgroundColor: '#559999',
    }
})
export default WorkEmp
