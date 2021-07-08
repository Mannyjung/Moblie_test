import React, { useState, useEffect } from 'react'
import { StyleSheet, SafeAreaView, View, FlatList, Text } from 'react-native';
import { Header } from "native-base";
//import { Data } from '../component/carou/data'
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListMyWork from '../component/ListMyWork';
import axios from 'axios'
const Mywork = () => {
    const [data, setdata] = useState({
        Username: ""
    })
    useEffect(() => {
        onLoad()
    }, []);
    const onLoad = async () => {
        const user_id = await AsyncStorage.getItem('User_id');
        setdata({ ...data, Username: user_id })
    }
let userID = data.Username
    const [mypost, setmypost] = useState([]);
    // console.log(mypost);
    useEffect(() => {
        axios.get("https://newapi-flashwork.herokuapp.com/public/mypost/" + userID)
            .then(response => {
                setmypost(response.data)

            })
            .catch(error => {
                // console.log(error);
            });
    }, [userID]);


    return (
        <>
            <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                    <Text style={styles.textHead}>
                        งานของฉัน  {userID}
                    </Text>
                </Header>
            </View>
            <Text style={{ fontSize: 18 }}>
                {/* เลื่อนขาว -> ซ้าย (เพื่อลบรูป) */}
                <Ionicons name="hand-left" size={24} color="black" />ปัดซ้ายเพื่อปรับปุ่ง
            </Text>
            <SafeAreaView style={styles.container}>
                <FlatList
                    data={mypost}
                    renderItem={({ item, index }) => {
                        return <ListMyWork data={item} />;
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
