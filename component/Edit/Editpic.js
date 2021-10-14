import { Container, Header, Content, SwipeRow, Icon, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Modal, Text, Image, View, StyleSheet, Dimensions, Pressable, TouchableOpacity, ScrollView, Alert,RefreshControl, SafeAreaView } from 'react-native'
import { Data } from '../carou/data'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import axios from 'axios'
const { width, height } = Dimensions.get('screen')
import Api from '../../api/Api'
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}
const Editpic = ({ route , navigation:{goBack}}) => {

    const [refreshing, setRefreshing] = useState(false);
    const { data_id } = route.params;
    const [photoWorkbyid, setphotoWorkbyid] = useState([]);
    useEffect(() => {
        Api.get("PIC/" + data_id)
            .then(response => {
                setphotoWorkbyid(response.data)
                console.log(response.data)
            })
            .catch(error => {
                console.log(error);
            });

    }, [data_id]);

    const showConfirm = async (w_img_id) => {
        await Alert.alert(
            "ลบรูปภาพ",
            "คุณต้องการลบรูปภาพหรือไม่ ?",
            [
                {
                    text: "ยกเลิก",
                    //onPress: () => console.log(pk_id,pk_name),
                    style: "cancel"
                },
                {
                    text: "ตกลง",
                    onPress: () => deletePic(w_img_id)
                    //onPress: () => console.log(w_img_id),
                }
            ]
        )
    };

    const reload = () => {
        Api.get("PIC/" + data_id)
            .then(response => {
                setphotoWorkbyid(response.data)
                //console.log(response.data)
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const onRefresh = () => {
        setRefreshing(true);
        reload()
        wait(2000).then(() => setRefreshing(false));
    };

    const deletePic = (w_img_id) => {
        console.log(w_img_id);

        Api.delete("deletePhotos/" + w_img_id)
            .then((response) => {
                console.log(response.data.message);
                if (response.data.message === "Delete success") {
                    Alert.alert("ลบเสร็จสิ้น")
                } else {
                    Alert.alert("เกิดปัญหากับระบบกรุณาลองใหม่อีกครั้งภายหลัง")
                }
            })
            .catch((error) => {
                console.log(error);

            });

    }
    return (
        <>
    
            <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
            <AntDesign style={styles.backpage} name="left" id="backpage" onPress={() => goBack()} />
                <Text style={styles.text}>
                    รูป {data_id}
                </Text>
            </Header>
            <Text style={{ fontSize: 18 }}>
                {/* เลื่อนขาว -> ซ้าย (เพื่อลบรูป) */}
                <Ionicons name="hand-left" size={24} color="black" />ปัดซ้ายเพื่อ ลบ
            </Text>

            {/* <Container> */}

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
           
                {photoWorkbyid.map((uri) => {
                    return (
                        <SwipeRow style={{ width: width }} key={uri.w_img_id} rightOpenValue={-75}
                            body={
                                <>
                                    <Image source={{ uri: uri.w_img_name }} style={styles.pic} key={uri.w_img_id} />
                                </>
                            }
                            right={
                                <Button danger style={styles.butt} onPress={() => showConfirm(uri.w_img_id)}>
                                    <Icon active name="trash" />
                                </Button>
                            }
                        />
                    )
                })}
            </ScrollView>
            </SafeAreaView>
            {/* </Container> */}
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    btnclose: {
        position: 'absolute',
        right: 0,
        padding: 3,
        margin: -5,
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        borderRadius: 20,
        color: 'red',
        fontSize: 24
    },
    text: {
        fontSize: 16,
        color: '#ffff',
        marginTop: 10
    },
    pic: {
        // margin: -20,
        marginTop: -13,
        marginBottom: -15,
        width: width,
        height: 170,
    },
    butt: {
        paddingBottom: -100,
        paddingTop: -100
    },
    backpage: {
        color: '#ffff',
        fontSize: 20,
        position: 'absolute',
        padding: 15,
        paddingTop:15,
        left: 0,
    }

})

export default Editpic
