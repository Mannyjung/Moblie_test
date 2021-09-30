import { Body, CardItem, Container, Content, Form, Header, Input, Label, Item, Button } from 'native-base';
import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Image, View, Alert } from "react-native";
import { Card } from 'react-native-paper';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import Api from '../../api/Api'

const EmpReview = ({ route }) => {

    const navigation = useNavigation();
    const { emm_id } = route.params;

    const [showdetailReviews, setshowdetailReviews] = useState([]);
    // console.log(emm_id)
    useEffect(() => {
        Api.get("show_comment/" + emm_id)
            .then(response => {
                setshowdetailReviews(response.data[0])
                console.log(response.data[0])
            })
            .catch(error => {
                console.log(error);
            });
    }, [emm_id]);

    const [insertcomment, setComment] = useState({
        emm_review: ""
    });

    const saveComment = () => {
        let data = {
            emm_review: insertcomment.emm_review,
            emm_status: "เสร็จสิ้นและรีวิว"
        }
        // console.log(data);
        Api.put('addreview/' + emm_id, data)
            .then((response) => {
                setComment({ ...insertcomment, data });
                if (response.data.message === "success") {
                    Alert.alert("บันทึกเรียบร้อย")
                    console.log(response.data);
                }
                else {
                    Alert.alert("เกิดปัญหากับระบบกรุณาลองใหม่อีกครั้งภายหลัง")
                }

            }).then(() => {
                navigation.navigate('Employment')
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <Content style={styles.content}>
            <Header androidStatusBarColor="#ff5749" searchBar rounded style={styles.head} transparent>
                <Text style={styles.text1}>
                    รีวิวงาน {emm_id}
                </Text>
            </Header>
            <Card transparent>
                <Form style={styles.from}>
                    <CardItem>
                        <Image source={{ uri: showdetailReviews.w_img_name }}
                            style={styles.img} />
                    </CardItem>
                    <CardItem>

                        <Body style={styles.body}>
                            <Text style={styles.textTitle}>
                                งาน : {showdetailReviews.aw_name}
                            </Text>
                            <Text style={styles.textDes}>
                                แพ็คเก็จ : {showdetailReviews.pk_name}
                            </Text>
                            <Text style={styles.textDes}>
                                ราคา : {showdetailReviews.pk_price}
                            </Text>
                            <Label style={styles.text16}>รีวิว</Label>

                            <Item style={styles.item} regular>
                                <Input onChangeText={(e) => setComment({ ...insertcomment, emm_review: e })} />
                                <Button style={styles.butt} onPress={() => saveComment()}  >
                                    <Text style={{ color: '#fff' }}>
                                        ยืนยันการรีวิว
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