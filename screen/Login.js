
import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import { Card, Item, Input, Content, CardItem, Body, Form, Label, Textarea, Header } from 'native-base'
import { Actions } from 'react-native-router-flux'
import FromLogin from '../component/login/FromLogin'
const { width, height } = Dimensions.get('window')
const Login = () => {
    return (
        <>
            <View style={styles.container} >
                <Header androidStatusBarColor="#ff5722" searchBar rounded transparent>

                </Header>
                <Card transparent style={styles.cardHead}>
                    <CardItem style={styles.cardItem}>
                        <Text style={styles.text}>
                            Log In
                        </Text>
                    </CardItem>
                </Card>
                <Card transparent>
                    <CardItem style={styles.card}>

                    </CardItem>
                    <Form style={styles.from}>
                        <Label style={styles.text16}>ชื่องาน</Label>
                        <Item>
                            <Input />
                        </Item>
                    </Form>
                </Card>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ff5722',
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        flex: 1,
        width: width,
        marginTop: 70,
        marginLeft: 20,
        // borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
        marginBottom: -50
    },
    cardHead: {
        // width:300,

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


})

export default Login
