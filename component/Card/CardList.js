import React from 'react'
import { Image, StyleSheet, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body, View } from "native-base";
import { Actions } from 'react-native-router-flux';
const CardList = ({ data }) => {
    return (
        <>
            <View style={styles.heades}>
                {data.map((item) => {
                    return (
                        <>
                            <Card transparent key={item.id}>
                                <TouchableOpacity style={styles.touch} onPress={() => Actions.profile()} >
                                    <CardItem style={styles.CardItem}>
                                        <Image
                                            source={{ uri: item.url }}
                                            style={styles.image}
                                        />
                                        <Body style={styles.body}>
                                            <Text style={styles.textTitle}>
                                                {item.title}
                                            </Text>
                                            <Text style={styles.textDes}>
                                                {item.des}
                                            </Text>
                                        </Body>

                                    </CardItem>
                                </TouchableOpacity>
                            </Card>
                        </>
                    )
                })}

            </View>
        </>
    )
}
const styles = StyleSheet.create({

    image: {
        width: 150,
        height: 130,
        borderRadius: 10,
        marginTop: -20,
        marginLeft: -10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#fff'
    }
    ,
    heades: {
        paddingRight: 8,
        paddingLeft: 8
    },
    CardItem: {
        marginTop: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#fff'
    }
    ,
    body: {
        marginLeft: 10,

    }
    ,
    textTitle: {
        textShadowColor: '#4E4E4E',
        textShadowOffset: { width: -1, height: 0.5 },
        textShadowRadius: 5,
        fontSize: 22,
        color: '#000'
    },
    textDes: {
        textShadowColor: '#4E4E4E',
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 10,
        paddingTop: 5,
        fontSize: 15,
        color: '#000'
    }
})

export default CardList
