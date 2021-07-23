import { Container, Header, Content, SwipeRow, Icon, Button } from 'native-base';
import React, { useState } from 'react'
import { Modal, Text, Image, View, StyleSheet, Dimensions, Pressable, TouchableOpacity, ScrollView } from 'react-native'
import { Data } from '../carou/data'
import { AntDesign, Ionicons } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')
const Editpic = ({route}) => {
    const {data_id} = route.params;
    return (
        <>
            <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                <Text style={styles.textStyle}>
                    รูป {data_id}
                </Text>
            </Header>
            <Text style={{ fontSize: 18 }}>
                {/* เลื่อนขาว -> ซ้าย (เพื่อลบรูป) */}
                <Ionicons name="hand-left" size={24} color="black" />ปัดซ้ายเพื่อ ลบ
            </Text>

            {/* <Container> */}


                <ScrollView >
                    {Data.map((uri) => {
                        return (
                            <SwipeRow style={{ width: width }} key={uri.id} rightOpenValue={-75}
                                body={
                                    <>
                                        <Image source={{ uri: uri.url }} style={styles.pic} key={uri.id} />
                                    </>
                                }
                                right={
                                    <Button danger style={styles.butt} onPress={() => alert(uri.url)}>
                                        <Icon active name="trash" />
                                    </Button>
                                }
                            />
                        )
                    })}
                </ScrollView>
            {/* </Container> */}
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },
    btnclose: {
        position: 'absolute',
        right: 0,
        padding: 3,
        margin: -5,
        backgroundColor: '#fff',
        width: 30,
        height: 30,
        borderRadius: 20,
        color: 'red',
        fontSize: 24
    },
    pic: {
        // margin: -20,
        marginTop: -13,
        marginBottom: -15,
        width: width,
        height: 170,
    },
    butt:{
        paddingBottom:-100,
        paddingTop:-100
    }
    

})

export default Editpic
