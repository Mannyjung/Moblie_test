import React, { useState, useEffect } from 'react';
import { Text,View, StyleSheet, Dimensions, FlatList, Animated } from 'react-native';
import { Card, CardItem, Body, Content } from 'native-base';
import axios from 'axios'
import Api from '../../api/Api'
const { width, height } = Dimensions.get('window')
const DetailPost = ({ id }) => {
    const [detailPost, setdetailPost] = useState([]);
    useEffect(() => {
        Api.get("PIC/" + id)
            .then(response => {
                setdetailPost(response.data)
                //console.log(detailPost)
            })
            .catch(error => {
                console.log(error);
            });

    }, [id]);

    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    return (
        <View>
        <FlatList

            data={detailPost}
            keyExtractor={(item, index) => 'key' + index}
            horizontal
            pagingEnabled
            scrollEnabled
            snapToAlignment="center"
            scrollEventThrottle={18}
            decelerationRate={"fast"}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item }) => {
                return <CarouselItem item={item} />
            }}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }]
            )}
        />
        <View style={styles.dotView}>
            {detailPost.map((_, i) => {
                let opacity = position.interpolate({
                    inputRange: [i - 1, i, i + 1],
                    outputRange: [0.3, 1, 0.3],
                    extrapolast: 'clamp'
                })
                return (
                    <Animated.View
                        key={i}
                        style={{
                            opacity,
                            height: 8,
                            width: 8,
                            backgroundColor: "#fff",
                            margin: 8,
                            padding: 3,
                            borderRadius: 5
                        }}
                    />
                )
            })
            }
        </View>

        <Content padder>
            <Card >
                <CardItem header >
                    {detailPost.map((detailPosts) => {
                        return (
                            <Body >
                                <Text style={{ color: '#000000', fontSize: 20 }}>
                                    {detailPosts.w_img_name}
                                </Text >
                            </Body>
                        )
                    })}
                </CardItem>
              
            </Card>
        </Content>
        </View>
    )
}
const styles = StyleSheet.create({
    btpack: {
        backgroundColor: '#F57C00'
    },
})

export default DetailPost