import React, { useState, useEffect } from 'react'
import { StyleSheet, View, FlatList, Text, RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { Header } from "native-base";
//import { Data } from '../component/carou/data'
import { AntDesign, MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ListMyWork from '../component/ListMyWork';
import axios from 'axios'
import Api from '../api/Api';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const Mywork = ({ navigation:{goBack} }) => {
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
    const [refreshing, setRefreshing] = useState(false);
    let userID = data.Username
    const [mypost, setmypost] = useState([]);
    // console.log(mypost);
    useEffect(() => {
        try {
            Api.get("mypost/" + userID)
                .then(response => {
                    setmypost(response.data)
                })
        } catch (error) {
            console.log(error.message);
        }
    }, [userID]);

    const onRefresh = () => {
        //console.log(refreshing);
        setRefreshing(true);
        reload()
        wait(2000).then(() => setRefreshing(false));
    };

    const reload = () => {
        //console.log(Userid + "id");
        try {
            //console.log("try");
            Api.get("mypost/" + userID)
                .then(response => {
                    //console.log("then");
                    setmypost(response.data)
                    //console.log(response.data + "155")
                })
        }
        catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                <AntDesign style={styles.backpage} name="left" id="backpage" onPress={() => goBack()} />
                    <Text style={styles.textHead}>
                        งานของฉัน  {userID}
                    </Text>
                </Header>
            </View>
            <Text style={{ fontSize: 18 }}>
                {/* เลื่อนขาว -> ซ้าย (เพื่อลบรูป) */}
                <Ionicons name="hand-left" size={24} color="black" />เลื่อนซ้ายเปิดเมนูแก้ไข
            </Text>



            <SafeAreaView style={styles.container}>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <FlatList
                        data={mypost}
                        renderItem={({ item, index }) => {
                            return <ListMyWork data={item} />;
                        }}
                        keyExtractor={item => item.aw_id}

                    />
                </ScrollView>
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
    backpage: {
        color: '#ffff',
        fontSize: 20,
        position: 'absolute',
        padding: 15,
        left: 0,
    }
})

export default Mywork
