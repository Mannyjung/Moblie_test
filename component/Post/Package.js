import React, { useState, useEffect } from 'react';
import { StyleSheet, Dimensions, Text, View } from 'react-native';
import { Content, Card, CardItem, Body, List, Left, Thumbnail, Right } from 'native-base';
import { Foundation } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');
import axios from 'axios'
const Package = ({ id }) => {
    const [detailPack, setdetailPack] = useState([]);
    useEffect(() => {
        axios.get("https://newapi-flashwork.herokuapp.com/public/getPackage/" + id)
            .then(response => {
                setdetailPack(response.data)
                //console.log(detailPack)
            })
            .catch(error => {
                console.log(error);
            });

    }, [id]);
    return (
        <Content padder style={styles.content} >
            {detailPack.map((detailPacks) => {
                return (
                    <View key={detailPack.pk_id}>
                        <Card>
                            <CardItem header bordered>
                                <Text>
                                    {detailPacks.pk_name}
                                </Text>
                            </CardItem>
                            <CardItem bordered>
                                <Body>
                                    <Text>
                                        {detailPacks.pk_detail}
                                    </Text>
                                </Body>
                            </CardItem>
                            <CardItem footer bordered style={{ backgroundColor: '#ff5957' }}>
                                <Text style={{ color: '#fff' }}>ราคา {detailPacks.pk_price} บาท</Text>
                                <Right style={{ paddingLeft: 182 }}>
                                    <Text style={{ color: '#fff' }}>
                                        สนใจ
                                        <Foundation name="pricetag-multiple" size={16} color="#fff" />
                                    </Text>

                                </Right>
                            </CardItem>
                        </Card>
                        <Card style={styles.card}>
                            <List avatar>
                                <Left>
                                    <Thumbnail source={{ uri: "https://i.pinimg.com/236x/e8/55/d4/e855d447720358bc71da3b38cd7ff950.jpg" }} />
                                </Left>
                                <Body>
                                    <Text>ศิวกร รามเรือง</Text>
                                </Body>
                                <Right>
                                    <Text>
                                        ผู้โพสต์งาน
                                    </Text>
                                </Right>
                            </List>
                        </Card>
                    </View>
                )
            })}
        </Content>
    )
}
const styles = StyleSheet.create({

    btpack: {
        backgroundColor: '#F57C00'
    },
    card: {
        padding: 5
    },
    content: {
        marginTop: -20
    }
})

export default Package