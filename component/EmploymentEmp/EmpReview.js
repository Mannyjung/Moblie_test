import { Body, CardItem, Container, Content, Form, Header, Input, Label, Item, Button } from 'native-base';
import React from 'react'
import { Text, StyleSheet, Image, View } from "react-native";
import { Card } from 'react-native-paper';
const EmpReview = () => {
    return (
        <Content style={styles.content}>
            <Header androidStatusBarColor="#ff5749" searchBar rounded style={styles.head} transparent>
                <Text style={styles.text1}>
                    รีวิวงาน
                </Text>
            </Header>
            <Card transparent>
                <Form style={styles.from}>
                    <CardItem>
                        <Image source={{ uri: 'https://storage.googleapis.com/fastwork-static/f6cbbf62-e180-484a-92bf-119523bc5fc2.jpg' }}
                            style={styles.img} />
                    </CardItem>
                    <CardItem>

                        <Body style={styles.body}>
                            <Text style={styles.textTitle}>
                                รับวาดภาพแฟนอาร์ต ตัวการ์ตูน ดารา ที่คุณชอบ
                            </Text>
                            <Text style={styles.textDes}>
                                ราคา 500 บาท
                            </Text>
                            <Label style={styles.text16}>รีวิว</Label>

                            <Item style={styles.item} regular>
                                <Input />
                                <Button style={styles.butt}  >
                                    <Text style={{ color: '#fff' }}>
                                        รีวิว
                                    </Text>
                                </Button>
                            </Item>
                        </Body>


                    </CardItem>
                </Form>
            </Card>

        </Content>


    )
}

export default EmpReview
const styles = StyleSheet.create({

    content: {
        flex: 1,
        marginTop: 10,
    },
    head: {
        backgroundColor: '#ff5749',
    },
    text1: {
        fontSize: 25,
        color: "#ffff"
    },
    textTitle: {

        fontSize: 20,
        color: '#000',
        fontWeight: 'bold'
    },
    textDes: {


        paddingTop: 5,
        fontSize: 15,
        color: '#000'
    },
    from: {

        backgroundColor: '#fff',
        padding: 2,
        margin: 8,
        marginBottom: -3,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    text16: {
        fontSize: 16,
        paddingTop: 10,
        fontWeight: 'bold'
    },
    item: {
        borderRadius: 5,
        marginBottom: 9,

    },
    body: {
        marginLeft: 10,
    },
    butt: {
        padding: 10,
        height: 50,

        backgroundColor: '#559999',
    },
    img: {
        
        width: 340,
        height: 350,

    }

})