import React, { useState, useEffect } from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, Left, Body, Thumbnail, Card, CardItem, View } from 'native-base';
import axios from 'axios';
import Api from '../../api/Api'

const Review = ({ id }) => {
    const [detailReview, setdetailReview] = useState([]);
    useEffect(() => {
        Api.get("reviewpost/" + id)
            .then(response => {
                setdetailReview(response.data)

            })
            .catch(error => {
                console.log(error);
            });

    }, [id]);

    return (
        <Content padder style={styles.content}>
            {detailReview.map((detailReviews) => {
                return (

                    <View key={detailReviews.wr_id}>
                        <Card style={styles.card}>
                            <CardItem avatar >
                                <Left>
                                    <Thumbnail source={{ uri: "https://i.pinimg.com/236x/e8/55/d4/e855d447720358bc71da3b38cd7ff950.jpg" }} />
                                </Left>
                                <Body style={styles.body}>
                                    <Text>{detailReviews.emm_user_id}</Text>
                                    <Text note> : {detailReviews.emm_review}</Text>
                                </Body>
                            </CardItem>
                        </Card>

                    </View>

                )
            })}
        </Content>
    );
}
const styles = StyleSheet.create({
    body: {
        marginLeft: -180
    },
    content: {
        marginTop: -20
    }
})

export default Review;