import React, { useState, useEffect } from 'react'
import { Text, Image, StyleSheet, TouchableOpacity,RefreshControl, SafeAreaView, ScrollView } from 'react-native';
import { Card, CardItem, Body, View,Content } from "native-base";
// import axios from 'axios'
import Api from '../../api/Api'
import { Actions } from 'react-native-router-flux';
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

const CardMain = ({ navigation }) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        NewApi()
    }, []);
    const NewApi = async () => {
        await Api.get('show_work')
            .then(response => {
                setData(response.data)
            })
    }
    const [refreshing, setRefreshing] = useState(false);
    const onRefresh = () => {
        setRefreshing(true);
        reload()
        wait(2000).then(() => setRefreshing(false));
    };
    const reload = () => {
        Api.get('show_work')
          .then(response => {
            sethistoryEmp(response.data)
          })
          .catch(error => {
            console.log(error);
          });
      }
    return (

       
        <View style={styles.heades}>
             <SafeAreaView>
                <ScrollView
                    contentContainerStyle={styles.scrollView}
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
             <Content padder>
                 
            
            {data.map((dataW) => {
                return (
                    <Card transparent key={dataW.aw_id}>
                        <TouchableOpacity style={styles.touch}
                            onPress={() => {
                                navigation.navigate('selectpost', {
                                    dataW: dataW,
                                });
                            }} >
                            <CardItem style={styles.CardItem}>
                                <Image
                                    source={{ uri: dataW.w_img_name }}
                                    style={styles.imgCard}
                                />
                                <Body style={styles.body}>
                                    <Text style={styles.textTitle}>
                                        {dataW.aw_name}
                                    </Text>
                                    <Text style={styles.textDes}>
                                        เริ่มต้น {dataW.pk_price} บาท
                                    </Text>
                                </Body>
                            </CardItem>
                        </TouchableOpacity>
                    </Card>
                )
            })}
             </Content>
                  </ScrollView>
            </SafeAreaView>
        </View>
    )
}
const styles = StyleSheet.create({
    imgCard: {
        width: 150,
        height: 100,
        borderRadius: 10,
        marginTop: -20,
        marginLeft: -10,
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        // elevation: 5,
        backgroundColor: '#fff'
    },
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
    },
    body: {
        marginLeft: 10,
    },
    textTitle: {
        //textShadowColor: '#4E4E4E',
        textShadowOffset: { width: -1, height: 0.5 },
        //textShadowRadius: 5,
        fontSize: 16,
        color: '#000'
    },
    textDes: {
        position: 'absolute',
        bottom: 0,
        right: 0,
        paddingTop: 18,
        fontSize: 15,
        color: '#000'
    }
})
export default CardMain
