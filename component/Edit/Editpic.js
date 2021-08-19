import { Container, Header, Content, SwipeRow, Icon, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Modal, Text, Image, View, StyleSheet, Dimensions, Pressable, TouchableOpacity, ScrollView,Alert } from 'react-native'
import { Data } from '../carou/data'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import axios from 'axios'
const { width, height } = Dimensions.get('screen')

const Editpic = ({route}) => {

    const {data_id} = route.params;
    const [photoWorkbyid, setphotoWorkbyid] = useState([]);
    useEffect(() => {
      axios.get("https://newapi-flashwork.herokuapp.com/public/PIC/" + data_id)
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


    const deletePic = (w_img_id) => {
        console.log(w_img_id);

        axios.delete("https://newapi-flashwork.herokuapp.com/public/deletePhotos/"+ w_img_id)
            .then((response) => {
                console.log(response.data);
                Alert.alert("ลบเสร็จสิ้น")
            })
            .catch((error) => {
                console.log(error);

            });

    }
    return (
        <>
            <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                <Text style={styles.textStyle}>
                    รูป {data_id}
                </Text>
            </Header>
            <Text style={{ fontSize: 18 }}>
                {/* เลื่อนขาว -> ซ้าย (เพื่อลบรูป) */}
                <Ionicons name="hand-left" size={24} color="black" />ปัดซ้ายเพื่อ ลบ
            </Text>

            {/* <Container> */}


                <ScrollView >
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
    pic: {
        // margin: -20,
        marginTop: -13,
        marginBottom: -15,
        width: width,
        height: 170,
    },
    butt:{
        paddingBottom:-100,
        paddingTop:-100
    }
    

})

export default Editpic
