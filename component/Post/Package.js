import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, View, Alert } from 'react-native';
import { Content, Card, CardItem, Body, List, Left, Thumbnail, Right, Button } from 'native-base';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Foundation } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import Api from '../../api/Api'
const Package = ({ id }) => {

    const [data, setdata] = useState({
        User_id: "",
        Status: ""

    })
    useEffect(() => {
        onLoad()

    }, []);
    const onLoad = async () => {
        const User_id = await AsyncStorage.getItem('User_id');
        const status = await AsyncStorage.getItem('status');
        setdata({ ...data, User_id: User_id, Status: status })
    }
    let Userid = data.User_id
    const navigation = useNavigation();
    const [detailPack, setdetailPack] = useState([]);
    useEffect(() => {
        Api.get("getPackage/" + id)
            .then(response => {
                setdetailPack(response.data)
            })
            .catch(error => {
                console.log(error);
            });

    }, [id]);

    const [detailPost, setdetailPost] = useState([]);
    useEffect(() => {
        Api.get("detailpost/" + id)
            .then(response => {
                setdetailPost(response.data[0])
                //console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });

    }, [id]);

    const [freepost, setfreepost] = useState([]);

    useEffect(() => {
        Api.get("freepost/" + id)
            .then(response => {
                setfreepost(response.data[0])
                //console.log(img)
            })
            .catch(error => {
                console.log(error);
            });

    }, [id]);
    let img = freepost.std_image;

    const showConfirm = async (pk_id, pk_name) => {
        await Alert.alert(
            "การจ้างงาน",
            "คุณสนใจจ้างงานและหรือไม่ ?",
            [
                {
                    text: "ยกเลิก",
                    //ronPress: () => console.log(pk_id,pk_name),
                    style: "cancel"
                },
                {
                    text: "ตกลง",
                    onPress: () => insertWork(pk_id, pk_name)
                }
            ]
        )
    };
    const insertWork = async (pk_id, pk_name) => {
        var dataEmp = {
            emm_user_id: Userid,
            emm_std_id: detailPost.aw_std_id,
            emm_pk_id: pk_id,
            emm_status: "รอการตอบรับ",
        }

        let data = {
            User_id: Userid,
            toUser_id: detailPost.aw_std_id,
            message: "สวัสดี อยากจ้างงาน" + detailPost.aw_name + "ที่แพ็คเกจ" + pk_name
        }

        let data1 = {
            User_id: detailPost.aw_std_id,
            toUser_id: Userid,
            message: "กรุณารอฟรีแลนซ์ตอบกลับข้อความ"
        }
        // console.log(dataEmp);
        // console.log(data);
        // console.log(data1);
        Api.post("employment", dataEmp)
            .then((res) => {
                if (res.data.message === "success") {
                    console.log(dataEmp)
                    console.log(res.data)
                }
            }
            )
        Api.post("message", data)
            .then((res) => {
                if (res.data.message === "success") {
                    console.log(res.data)
                    if (res.data.message === "success") {
                        Api.post("message", data1)
                            .then((res) => {
                                console.log(res.data)
                                Alert.alert("การจ้างงานเสร็จสิ้น")
                            })
                        // .then(()=>{
                        //     navigation.navigate('Employment')
                        // })
                    }
                }
            })

    };

    return (
        <Content padder style={styles.content} >
            <Card >
                <CardItem header >
                    <Body >
                        <Text style={{ color: '#000000', fontSize: 20 }}>
                            {detailPost.aw_name}
                        </Text >
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            {detailPost.aw_detail}
                        </Text>
                    </Body>
                </CardItem>
            </Card>
            {detailPack.map((detailPacks) => {
                return (
                    <View key={detailPacks.pk_id}>
                        <Card>
                            <CardItem header bordered>
                                <Text>
                                    {detailPacks.pk_name}
                                </Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        {detailPacks.pk_detail}
                                    </Text>
                                </Body>
                            </CardItem>
                            {data.Status === "Employer" ?
                                <Button style={{ marginLeft: 20, margin: 5 }} transparent
                                    onPress={() => showConfirm(detailPacks.pk_id, detailPacks.pk_name)}>
                                    <CardItem footer bordered style={{ backgroundColor: '#ff5957' }}>
                                        <Text style={{ color: '#fff' }}>ราคา {detailPacks.pk_price} บาท</Text>
                                        <Right style={{ paddingLeft: 150 }}>
                                            <Text style={{ color: '#fff' }}>
                                                สนใจจ้าง
                                            </Text>
                                        </Right>
                                    </CardItem>
                                </Button>
                                : null
                            }
                        </Card>
                    </View>

                )
            })}
            <Card style={styles.card}>
                <List avatar>
                    <Left>
                        <Thumbnail source={{ uri: img }} />
                    </Left>
                    <Body>
                        <Text>{freepost.std_fname}{" "}{freepost.std_lname}</Text>
                    </Body>
                    <Right>
                        <Text>
                            ผู้โพสต์งาน
                        </Text>
                    </Right>
                </List>
            </Card>
        </Content>
    )
}
const styles = StyleSheet.create({

    btpack: {
        backgroundColor: '#F57C00'
    },
    card: {
        padding: 3
    },
    content: {
        marginTop: -15
    }
})

export default Package