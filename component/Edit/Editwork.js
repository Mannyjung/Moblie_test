import { Alert } from 'react-native'
import { Button, Card, Content, Form, Header, Input, Item, Label, Textarea } from 'native-base'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Picker, StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import Api from '../../api/Api'
const Editwork = ({ route, navigation:{goBack} }) => {
    const navigation = useNavigation();
    const { data_id } = route.params;
    //console.log(data_id)


    const [dataPost, setdataPost] = useState({
        aw_name: "",
        aw_detail: "",
    })
    useEffect(() => {
        Api.get("detailpost/" + data_id)
            .then(response => {
                setdataPost(response.data[0])
                //console.log(detailWorkbyid)
            })
            .catch(error => {
                console.log(error);
            });
    }, [data_id]);



    const ChangeName = (text) => {
        console.log(text);
        setdataPost({ ...dataPost, aw_name: text })

    }
    const ChangeDetail = (text) => {
        setdataPost({ ...dataPost, aw_detail: text })
    }

    const showConfirm = async () => {
        await Alert.alert(
            "แก้ไขงาน",
            "คุณต้องการแก้ไขงานหรือไม่ ?",
            [
                {
                    text: "ยกเลิก",
                    //onPress: () => console.log(pk_id,pk_name),
                    style: "cancel"
                },
                {
                    text: "ตกลง",
                    onPress: () => savePost()
                    //onPress: () => console.log(dataPost),
                }
            ]
        )
    };

    const savePost = () => {
        let data = {
            aw_name: dataPost.aw_name,
            aw_detail: dataPost.aw_detail,
            aw_status: "รอดำเนินการ",
        }
        console.log(data)

        Api.put("editpost/" + data_id, data)
            .then((response) => {
                console.log(response.data.message);
                if (response.data.message === "success") {
                    Alert.alert("แก้ไขงานเสร็จสิ้น")
                    navigation.navigate('myWork')
                }
                else {
                    Alert.alert("เกิดปัญหากับระบบกรุณาลองใหม่อีกครั้งภายหลัง")
                }
            })

            ;
    }
    return (
        <>
            <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                <AntDesign style={styles.backpage} name="left" id="backpage" onPress={() => goBack()} />
                    <Text style={styles.textHead}>
                        งานของฉัน  {data_id}
                    </Text>
                </Header>
            </View>
            <Content style={styles.heades}>
                <Card transparent>
                    <Form style={styles.from}>

                        <Text style={styles.text}>
                            แก้ไขงาน
                        </Text>
                        <Label style={styles.text16}>ชื่องาน</Label>
                        <Item style={styles.item} regular>
                            <Textarea rowSpan={3} name="aw_name" value={dataPost.aw_name} onChangeText={text => ChangeName(text)} />
                        </Item>
                        <Label style={styles.text16}>ลายละเอียดงาน</Label>
                        <Item style={styles.item} regular>
                            {/* <Input rowSpan={5} bordered /> */}
                            <Textarea rowSpan={18} name="aw_detail" value={dataPost.aw_detail} onChangeText={text => ChangeDetail(text)} />
                        </Item>
                        {/* <Label style={styles.text16}>หมวดหลัก</Label>
                        <Item style={styles.item} regular>
                            <Input value="" />
                        </Item>
                        <Label style={styles.text16}>หมวดย่อย</Label>
                        <Item style={styles.item} regular>
                            <Input value="" />
                        </Item> */}

                        <Button block style={styles.button} onPress={() => showConfirm()}>
                            <Text style={styles.text22}  >บันทึก</Text>
                        </Button>
                    </Form>
                </Card>


            </Content>
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    textHead: {
        color: '#fff',

    },
    text: {
        color: '#ff5722',
        fontSize: 24,
        marginBottom: 5
    },
    text16: {
        fontSize: 16
    },
    item: {
        borderRadius: 5,
        marginBottom: 9,

    },
    from: {

        backgroundColor: '#fff',
        padding: 10,
        margin: 8,
        marginBottom: -3,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    button: {
        color: '#fff',
        backgroundColor: '#ff5722',
        marginTop: 30,
        marginBottom: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    text22: {
        fontSize: 22,
        color: '#ffff'
    },
    textarea: {
        height: 300
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

export default Editwork