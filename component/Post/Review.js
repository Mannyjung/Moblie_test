import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Content, Left, Body, Thumbnail, Card, CardItem } from 'native-base';
const Review = () => {
    return (
        <Content padder style={styles.content}>
            <Card style={styles.card}>
                <CardItem avatar >
                    <Left>
                        <Thumbnail source={{ uri: "https://i.pinimg.com/236x/e8/55/d4/e855d447720358bc71da3b38cd7ff950.jpg" }} />
                    </Left>
                    <Body style={styles.body}>
                        <Text>ศิวกร รามเรือง</Text>
                        <Text note>ทำงานไว</Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    );
}
const styles = StyleSheet.create({
    body: {
        marginLeft: -180
    },
    content:{
        marginTop:-20
    }
})

export default Review;
