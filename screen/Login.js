
import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, ImageBackground } from 'react-native'
import { Card, Item, Input, Content, CardItem, Body, Form, Label, Textarea, Header, Button } from 'native-base'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('screen')
const Login = () => {
    return (
        <>
            <View style={styles.container} androidStatusBarColor="#ff5722" searchBar rounded transparent>
                {/* background-image: linear-gradient(-60deg, #ff5858 0%, #f09819 100%); */}
                <LinearGradient
                    start={{ x: 0.0, y: 0.1 }} end={{ x: 0.5, y: 1 }}
                    colors={['#ff6622', '#ff5858']}
                    style={styles.background}
                />
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
                            <AntDesign name="aliwangwang" style={styles.icon} />
                            {/* <AntDesign name="dingding-o"  */}
                            {/* <FontAwesome name="user-circle-o"   /> */}
                            <Label style={styles.lable}>
                                <Text style={styles.text22}>
                                    ชื่อผู้ใช้ / อีเมล์
                                </Text>
                            </Label>
                            <Item>
                                <Input />
                            </Item>
                            <Label style={styles.lable}>
                                <Text style={styles.text22}>
                                    รหัสผ่าน
                                </Text>
                            </Label>
                            <Item>
                                <Input />
                            </Item>

                            <Button block style={styles.button}  onPress={() => Actions.loginV2()}>
                                <Text style={styles.text22} >เข้าสู่ระบบ</Text>
                            </Button>
                            <Button transparent light>
                                <Text style={styles.text16}>ย้อนกลับ</Text>
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
        marginTop: 40,
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
        flex: 1,
        height: height / 1.6,
        backgroundColor: '#fff',
        padding: 20,
        marginTop: 130,
        marginRight: -20,
        borderTopLeftRadius: 25,
        borderBottomLeftRadius: 25,
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
    lable: {
        marginTop: 15
    },
    text16: {
        fontSize: 16
    },
    text22: {
        fontSize: 22,
    },
    text28: {
        fontSize: 28
    },





})

export default Login
