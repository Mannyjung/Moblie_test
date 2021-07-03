import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import { Card, CardItem, Body, Content } from 'native-base';
import axios from 'axios'
const DetailPost = ({ id }) => {
    const [detailPost, setdetailPost] = useState([]);
    useEffect(() => {
        axios.get("https://newapi-flashwork.herokuapp.com/public/detailpost/" + id)
            .then(response => {
                setdetailPost(response.data)
                //console.log(detailPost)
            })
            .catch(error => {
                console.log(error);
            });

    }, [id]);
    return (
        <Content padder>
            <Card >
                <CardItem header >
                    {detailPost.map((detailPosts) => {
                        return (
                            <Body >
                                <Text style={{ color: '#000000', fontSize: 20 }}>
                                    {detailPosts.aw_name}
                                </Text >
                            </Body>
                        )
                    })}
                </CardItem>
                <CardItem>
                {detailPost.map((detailPosts) => {
                        return (
                    <Body>
                        <Text>
                           {detailPosts.aw_detail}
                        </Text>
                    </Body>
                    )
                })}
                </CardItem>
            </Card>
        </Content>
    )
}
const styles = StyleSheet.create({
    btpack: {
        backgroundColor: '#F57C00'
    },
})

export default DetailPost