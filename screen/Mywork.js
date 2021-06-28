import React, { useState, useEffect } from 'react'
import { Image, StyleSheet, TouchableOpacity, Animated, StatusBar, SafeAreaView, View, FlatList } from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";
//import { Data } from '../component/carou/data'
import ListMyWork from '../component/ListMyWork';
import axios from 'axios'
const Mywork = () => {
    //const [lists, setLists] = useState(Data);

    const [mypost, setmypost] = useState([]);
    console.log(mypost);
    useEffect(() => {
        axios.get("https://newapi-flashwork.herokuapp.com/public/mypost/614259048")
            .then(response => {
                setmypost(response.data)
                
            })
            .catch(error => {
                console.log(error);
            });
    }, []);


    return (
        <>
            <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                    <Text style={styles.textHead}>
                        งานของฉัน  614259048
                    </Text>
                </Header>
            </View>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={mypost}
                    renderItem={({ item, index }) => {
                        return <ListMyWork data={item}/>;
                    }}
                    ItemSeparatorComponent={() => {
                        return <View ></View>;
                    }}
                />
            </SafeAreaView>
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    textHead: {
        color: '#fff',

    }, container: {
        flex: 1,
    },
    seperatorLine: {
        height: 1,
        backgroundColor: 'black',
    },
})

export default Mywork
