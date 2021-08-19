import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, RefreshControlBase, RefreshControlComponent, Alert } from 'react-native'
import { Card, Item, Input, CardItem, Form, Button } from 'native-base'
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Feather, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux';
import Main from './Main';
const { width, height } = Dimensions.get('screen')
const LoginV2 = ({ navigation }) => {
    const [data, setdata] = useState({
        User_id: "",
        User_password: ""
    })

    const login = async () => {
        const alerts = "กรุณาใส่"
        if (!data.User_id.trim()) {
            Alert.alert(

                alerts + 'ชื่อผู้ใช้');
            return;
        } if (!data.User_password.trim()) {
            Alert.alert(

                alerts + 'รหัสผ่าน');
            return;
        }
        console.log('Post now')
        await axios.post("https://newapi-flashwork.herokuapp.com/public/login_user", data)

            .then(async (res) => {
                if (res.data.message === 'Fail Login') {
                    console.log('Failpass')
                    navigation.navigate('login')

                }
                else if (res.data.message === 'success') {
                    await AsyncStorage.setItem('User_id', res.data.username)
                    await AsyncStorage.setItem('fname', res.data.fname)
                    await AsyncStorage.setItem('lname', res.data.lname)
                    await AsyncStorage.setItem('image', res.data.img)
                    await AsyncStorage.setItem('status', res.data.status)
                    if (res.data.status == 'Student') {
                        navigation.navigate('student')
                    }
                    else if (res.data.status == 'Employer') {
                        navigation.navigate('employer')
                    }
                }
                else {
                    console.log("err")
                }
            })
    }
    return (
        <>
            <View style={styles.container} androidStatusBarColor="#ff5722" searchBar rounded transparent>
                <View>
                    <Image source={{ uri: 'http://www.vistaimage.net/wp-content/uploads/2018/12/IMG_4674102-683x1024.jpg' }} style={{ width: width, height: height, position: 'absolute' }} />
                </View>
                <Card transparent>
                    <CardItem style={styles.card}>
                        <Text style={styles.text28}>
                            เข้าสู่ระบบ <Text>  </Text>
                            <Text style={{ color: '#ff5722', fontStyle: 'normal' }}>
                                FLASH WORK
                            </Text>
                        </Text>
                    </CardItem>
                </Card>

                <Card transparent >
                    <CardItem style={{ backgroundColor: 'transparent' }}>
                        <Form style={styles.from}>
                            <Item regular style={styles.inputItem}>
                                <Feather name="user" size={24} color="black" />
                                <Input placeholder='ชื่อผู้ใช้ / รหัสนักศึกษา' name="User_id" onChangeText={(e) => setdata({ ...data, User_id: e })} />
                            </Item>
                            <Item regular style={styles.inputItem}>
                                <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
                                <Input placeholder='รหัสผ่าน' name="User_password" secureTextEntry={true} onChangeText={(e) => setdata({ ...data, User_password: e })} />
                            </Item>
                            <Button block style={styles.button} onPress={() => login()}  >
                                <Text style={styles.text22} >เข้าสู่ระบบ</Text>
                            </Button>
                            <Button transparent light onPress={() => Actions.main()}>
                                <Ionicons name="arrow-back-circle-outline" size={16} color="#ff5722" />
                                <Text style={styles.text16} >ย้อนกลับ
                                </Text>
                            </Button>
                        </Form>
                    </CardItem>
                </Card>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        // height: height,


    },
    background: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        height: height,
    },

    card: {
        marginTop: 80,
        width: 300,
        marginLeft: -1,
        height: 70,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        marginBottom: -50,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    cardHead: {
        marginLeft: -100,
        marginTop: 150,
        color: '#000'
    },
    cardItem: {
        width: 300,
        height: 100,
        borderTopRightRadius: 50,
        borderBottomRightRadius: 50,
    },
    text: {
        fontSize: 40,
        fontWeight: 'bold',
        fontFamily: ''
    },
    textInput: {
        borderColor: '#595959',
        borderWidth: 3,
        borderRadius: 20,
        margin: 3,
        position: 'absolute'
    },
    from: {
        alignItems: 'center',
        flex: 1,
        backgroundColor: '#fff',
        padding: 30,
        paddingBottom: 10,
        marginTop: height / 6,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    icon: {
        fontSize: 50,
        color: '#ff5555',
        padding: 4,
        paddingLeft: '40%',
        marginTop: 25,
        marginBottom: 7,
        textShadowColor: '#000',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 5,
        // fontSize: 22,
        // color: '#000'
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
    inputItem: {
        marginBottom: 8,
        paddingLeft: 8,
        borderRadius: 10
    },
    lable: {
        marginTop: 15
    },
    text16: {
        fontSize: 16,
        paddingLeft: 3
    },
    text22: {
        fontSize: 22,
        color: '#ffff'
    },
    text28: {
        fontSize: 28,
        marginBottom: 15
    },





})

export default LoginV2