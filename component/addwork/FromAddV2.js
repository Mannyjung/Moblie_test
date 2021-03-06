import React, { useState, useEffect } from 'react';
import { Image, View, StyleSheet, ScrollView, TouchableOpacity, Dimensions, Button, Alert, ActivityIndicator } from 'react-native'
import {
    Card, Item, Input, Content, Text, CardItem, Body, Form, Label, Textarea
} from 'native-base';
import { Picker } from '@react-native-picker/picker';
import { MaterialCommunityIcons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')

import Api from '../../api/Api'
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as ImagePicker from 'expo-image-picker';
import { storage } from "../firebase";
import { useNavigation } from '@react-navigation/native';

const FromAddV2 = () => {
    const navigation = useNavigation();
    const [spin, setSpin] = useState(false)
    const [subcate, setsubcate] = useState([]);
    const [data, setdata] = useState({
        User_id: "",
        Image: "",
        Name: "",
        Status: ""
    })
    const [postwork, setPostwork] = useState(
        {
            User_id: "",
            Work_name: "",
            Work_detail: "",
            Work_category: "",
            Pk_name: "",
            Pk_detail: "",
            Pk_price: "",
            timeperiod: "",
            rawimg: []
        }
    );
    const refreshcomp = () => {
        setPostwork({
            User_id: "",
            Work_name: "",
            Work_detail: "",
            Work_category: "",
            Pk_name: "",
            Pk_detail: "",
            Pk_price: "",
            timeperiod: "",
            Work_img: []
        })
    }
    useEffect(() => {
        const unsubscribe = navigation.addListener("focus", () => {
            refreshcomp()
            return unsubscribe;
        })
    }, [navigation]);

    useEffect(() => {
        onLoad()
    }, []);
    useEffect(() => {
        Api.get("subcate")
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
        setdata({ ...data, User_id: User_id, Image: image, Name: name, Status: status })
        setPostwork({ ...postwork, User_id: User_id })

    }
    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,

        })

        if (!result.cancelled) {
            let uri = result.uri
            await setPostwork({ ...postwork, rawimg: [...postwork.rawimg, uri] });
        }
    };

    const upload = async (uri) => {
        const user_id = data.User_id;
        const newName = Math.random();
        const img = await fetch(uri);
        const blob = await img.blob();
        const snapshot = await storage.ref(`${user_id}/image/${newName}`).put(blob);
        blob.close();
        const imgUrl = await snapshot.ref.getDownloadURL()
        return imgUrl
    }

    const uploadFileToFirebase = async (raw) => {
        if (!postwork.Work_name.trim()) {
            Alert.alert('????????????????????????????????????????????????');
            return;
        } if (!postwork.Work_detail.trim()) {
            Alert.alert('??????????????????????????????????????????????????????????????????');
            return;
        } if (!postwork.Work_category.trim()) {
            Alert.alert('???????????????????????????????????????????????????????????????');
            return;
        } if (!postwork.Pk_name.trim()) {
            Alert.alert('??????????????????????????????????????????????????????????????????');
            return;
        } if (!postwork.Pk_detail.trim()) {
            Alert.alert('????????????????????????????????????????????????????????????????????????????????????');
            return;
        } if (!postwork.Pk_price.trim()) {
            Alert.alert('???????????????????????????????????????????????????????????????????????????');
            return;
        } if (!postwork.timeperiod.trim()) {
            Alert.alert('?????????????????????????????????????????????????????????????????????');
            return;
        }
        setSpin(true)
        // let array = Array.from(raw)
        const promises = [];
        raw.forEach(file => {
            console.log("forEach")
            promises.push(
                new Promise((resolve, reject) => {
                    resolve(upload(file))
                })
            )

        })
        let result = await Promise.all(promises);
        return result;


    }

    const savePost = async (img) => {
        let work = {
            User_id: postwork.User_id,
            Work_name: postwork.Work_name,
            Work_detail: postwork.Work_detail,
            Work_category: postwork.Work_category,
            Pk_name: postwork.Pk_name,
            Pk_detail: postwork.Pk_detail,
            Pk_price: postwork.Pk_price,
            timeperiod: postwork.timeperiod,
            Work_img: img
        }

        await Api.post("postwork", work)
            .then((response) => {
                if (response.data.messages === "success") {
                    setSpin(false)
                    Alert.alert('????????????????????????????????????????????????????????????????????????')
                    refreshcomp()
                } else {
                    setSpin(false)
                    Alert.alert("?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????????")
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }
    return (
        <>
            {/* <View style={styles.view}> */}
                <Content style={styles.heades}>
                    <Form >
                        <Card transparent>

                            <Form style={styles.from}>

                                <Text style={styles.text}>
                                    ?????????????????????
                                </Text>


                                <Label style={styles.text16}>?????????????????????</Label>
                                <Item style={styles.item} regular>
                                    <Input value={postwork.Work_name} name="Work_name" onChangeText={(e) => setPostwork({ ...postwork, Work_name: e })} />
                                </Item>
                                <Label style={styles.text16}>???????????????????????????????????????</Label>
                                <Item style={styles.item} regular>
                                    {/* <Input rowSpan={5} bordered /> */}
                                    <Textarea value={postwork.Work_detail} name="Work_detail" onChangeText={(e) => setPostwork({ ...postwork, Work_detail: e })} rowSpan={3} placeholder="???????????????????????????????????????" />
                                </Item>
                                <Label style={styles.text16}>????????????????????????</Label>
                                <Picker selectedValue={postwork.Work_category}
                                    style={{ height: 50 }}
                                    onValueChange={(e) => setPostwork({ ...postwork, Work_category: e })}
                                >
                                    {subcate.map((item) => {
                                        return (
                                            <Picker.Item label={item.sub_cate_name} value={item.sub_cate_id} key={item.sub_cate_id} />
                                        )
                                    })}
                                </Picker>


                            </Form>
                        </Card>
                        <Card transparent>
                            <Form style={styles.from}>

                                <Text style={styles.text}>
                                    ?????????????????????
                                </Text>


                                <Label style={styles.text16}>?????????????????????????????????</Label>
                                <Item style={styles.item} regular>
                                    <Input value={postwork.Pk_name} name="Pk_name" onChangeText={(e) => setPostwork({ ...postwork, Pk_name: e })} />
                                </Item>
                                <Label style={styles.text16}>????????????????????????????????????????????????????????????</Label>
                                <Item style={styles.item} regular>
                                    {/* <Input rowSpan={5} bordered /> */}
                                    <Input value={postwork.Pk_detail} name="Pk_detail" onChangeText={(e) => setPostwork({ ...postwork, Pk_detail: e })} />
                                </Item>
                                <Label style={styles.text16}>????????????</Label>
                                <Item style={styles.item} regular>
                                    <Input value={postwork.Pk_price} name="Pk_price" onChangeText={(e) => setPostwork({ ...postwork, Pk_price: e })} />
                                </Item>
                                <Label style={styles.text16}>????????????????????????</Label>
                                <Picker
                                    selectedValue={postwork.timeperiod}
                                    style={{ height: 50 }}
                                    onValueChange={(e) => setPostwork({ ...postwork, timeperiod: e })}
                                >
                                    <Picker.Item label="3 ?????????" value="??????????????? 3 ?????????" />
                                    <Picker.Item label="7 ?????????" value="??????????????? 7 ?????????" />
                                    <Picker.Item label="14 ?????????" value="??????????????? 14 ?????????" />
                                    <Picker.Item label="21 ?????????" value="??????????????? 21 ?????????" />
                                    <Picker.Item label="30 ?????????" value="??????????????? 30 ?????????" />

                                </Picker>

                            </Form>
                        </Card>
                        <Card transparent>
                            <Form style={styles.from}>

                                <Text style={styles.text}>
                                    ?????????

                                </Text>

                                {postwork.rawimg ? postwork.rawimg.map((item, i) => {

                                    return (
                                        <Image key={i} source={{ uri: item ? item : null }} style={{ width: 150, height: 150 }} />
                                    )
                                }) : (
                                    null
                                )}

                                <Form style={styles.from}>
                                    <Button onPress={pickImage} title="????????????????????????"></Button>
                                </Form>
                            </Form>

                        </Card>

                        <Button
                            title="????????????????????????"
                            onPress={async () => {
                                if (postwork.rawimg) {
                                    const urls = await uploadFileToFirebase(postwork.rawimg);
                                    savePost(urls);
                                }
                                else {
                                    savePost("")
                                }
                            }}
                        />
                    </Form>

                </Content>
            {/* </View> */}
            <View >
                <ActivityIndicator style={styles.spin} size={100} color="#ff5722" animating={spin} />
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

    }, spin: {
        flex: 1,
        justifyContent: "center",
        marginTop: -600,
        // backgroundColor:"#000",
        // opacity:0.8
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