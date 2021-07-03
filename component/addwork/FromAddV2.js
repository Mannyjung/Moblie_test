import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Button } from 'react-native'
import {
    Card, Item, Input, Content, Text, CardItem, Body, Form, Label, Textarea
} from 'native-base';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';

const FromAddV2 = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    const [subcate, setsubcate] = useState([]);
    const [data, setdata] = useState({
        User_id: "",
        Image: "",
        Name: "",
        Status:""
    })
    useEffect(() => {
        onLoad()
    }, []);
    useEffect(() => {
        axios.get("https://newapi-flashwork.herokuapp.com/public/subcate")
            .then(response => {
                setsubcate(response.data)
            })
            .catch(error => {
                console.log(error);
            });
    }, []);
    const onLoad = async () => {
        const User_id = await AsyncStorage.getItem('User_id');
        const name = await AsyncStorage.getItem('fname');
        const image = await AsyncStorage.getItem('image');
        const status = await AsyncStorage.getItem('status');
        setdata({ ...data, User_id: User_id, Image: image, Name: name, Status:status})


    }
    const [postwork, setPostwork] = useState(
        {
            User_id: "614259048",
            Work_name: "",
            Work_detail: "",
            Work_category: "",
            Pk_name: "",
            Pk_detail: "",
            Pk_price: "",
            timeperiod: "",
            Work_img: ["fsaasfsa.jpg"],
        }
    );
    console.log(data)
    const [selectsub, setselectsub] = useState({
        Work_category: "",
    })
    const savePost = () => {
        console.log(postwork);
        axios.post("https://newapi-flashwork.herokuapp.com/public/postwork", postwork)
            .then((response) => {
                console.log(response.data);

            })
            .catch((error) => {
                console.log(error);

            });

    }

    return (
        <>
            <View style={styles.view}>
                <Content style={styles.heades}>
                    <Form >
                        <Card transparent>

                            <Form style={styles.from}>

                                <Text style={styles.text}>
                                    เนื้อหา
                                </Text>
                               

                                <Label style={styles.text16}>ชื่องาน</Label>
                                <Item style={styles.item} regular>
                                    <Input name="Work_name" onChangeText={(e) => setPostwork({ ...postwork, Work_name: e })} />
                                </Item>
                                <Label style={styles.text16}>ลายละเอียดงาน</Label>
                                <Item style={styles.item} regular>
                                    {/* <Input rowSpan={5} bordered /> */}
                                    <Textarea name="Work_detail" onChangeText={(e) => setPostwork({ ...postwork, Work_detail: e })} rowSpan={3} placeholder="ลายละเอียดงาน" />
                                </Item>
                                {/* <Label style={styles.text16}>หมวดหลัก</Label>
                            <Item style={styles.item} regular>
                                <Input  type="select" name="main_cate_id" id="main_cate_id"/>
                            </Item> */}
                                <Label style={styles.text16}>หมวดย่อย</Label>
                                <Picker
                                    style={{ height: 50 }}
                                    onValueChange={(e) => setselectsub({ ...selectsub, Work_category: e })}
                                >
                                    {subcate.map((item) => {
                                        return (
                                            <Picker.Item label={item.sub_cate_name} value={item.sub_cate_id} key={item.sub_cate_id} />
                                        )
                                    })}
                                </Picker>
                                <Item style={styles.item} regular>
                                    <Input name="Work_category" onChangeText={(e) => setPostwork({ ...postwork, Work_category: e })} />
                                </Item>

                            </Form>
                        </Card>
                        <Card transparent>
                            <Form style={styles.from}>

                                <Text style={styles.text}>
                                    แพ็คเกจ
                                </Text>


                                <Label style={styles.text16}>ชื่อแพ็คเกจ</Label>
                                <Item style={styles.item} regular>
                                    <Input name="Pk_name" onChangeText={(e) => setPostwork({ ...postwork, Pk_name: e })} />
                                </Item>
                                <Label style={styles.text16}>ลายละเอียดรายแพ็คเกจ</Label>
                                <Item style={styles.item} regular>
                                    {/* <Input rowSpan={5} bordered /> */}
                                    <Textarea name="Pk_detail" onChangeText={(e) => setPostwork({ ...postwork, Pk_detail: e })} rowSpan={3} />
                                </Item>
                                <Label style={styles.text16}>ราคา</Label>
                                <Item style={styles.item} regular>
                                    <Input name="Pk_price" onChangeText={(e) => setPostwork({ ...postwork, Pk_price: e })} />
                                </Item>
                                <Label style={styles.text16}>ระยะเวลา</Label>
                                {/* <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50 }}
                                onValueChange={(e) => setPostwork({ ...postwork, timeperiod: e })}
                            >
                                <Picker.Item label="7 วัน" value="7" />
                                <Picker.Item label="30 วัน" value="30" />
                            </Picker> */}
                                <Item style={styles.item} regular>
                                    <Input name="timeperiod" onChangeText={(e) => setPostwork({ ...postwork, timeperiod: e })} />
                                </Item>
                            </Form>
                        </Card>
                        <Card transparent>
                            <Form style={styles.from}>

                                <Text style={styles.text}>
                                    รูป
                                </Text>


                                <Body>
                                    <MaterialCommunityIcons name="camera-burst" style={styles.icon} />
                                    <Label>เพิ่มรูป</Label>
                                </Body>
                            </Form>

                        </Card>
                        <Button
                            title="ตกลง"
                            onPress={() => savePost()}
                        />
                    </Form>
                </Content>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        // flexDirection: 'row',
        // justifyContent: 'center',
        // alignItems: 'center',

    },

    heades: {
        // flex: 1,
        height: height,
        marginBottom: 10,
        paddingRight: 8,
        paddingLeft: 8
    },
    headCard: {
        position: 'relative',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#595959'
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
    item: {
        borderRadius: 5,
        marginBottom: 9,

    },
    text16: {
        fontSize: 16
    },
    text22: {
        fontSize: 24, marginBottom: 5
    },
    text28: {
        fontSize: 28
    },
    icon: {
        marginTop: 5,
        fontSize: 100,
        textShadowColor: '#000',
        textShadowOffset: { width: -1, height: 0.5 },
        textShadowRadius: 5,
        color: '#ff5743'
    },
    fromIcon: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        margin: 15,
        marginTop: -8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    text: {
        color: '#ff5722',
        fontSize: 24,
        marginBottom: 5
    }

});

export default FromAddV2