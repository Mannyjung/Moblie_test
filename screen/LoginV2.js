
import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import { Card, Item, Input, CardItem, Form, Button } from 'native-base'


import { Feather, MaterialCommunityIcons, AntDesign ,Ionicons } from '@expo/vector-icons'
import { Actions } from 'react-native-router-flux'; 
const { width, height } = Dimensions.get('screen')
const LoginV2 = () => {
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
                                <Input placeholder='ชื่อผู้ใช้ / รหัสนักศึกษา' />
                            </Item>
                            <Item regular style={styles.inputItem}>
                                <MaterialCommunityIcons name="form-textbox-password" size={24} color="black" />
                                <Input placeholder='รหัสผ่าน' />
                            </Item>
                            <Button block style={styles.button} >
                                <Text style={styles.text22}  >เข้าสู่ระบบ</Text>
                            </Button>
                            <Button transparent light  onPress={() => Actions.main()}>
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
        paddingBottom:10,
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
        paddingLeft:3
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
