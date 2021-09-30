import {
    Body,
    Card,
    CardItem,
    Button,
    Header,
    Item,
    Form,
    Label,
    Input,
    Textarea,
    Content,

} from "native-base";
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, TouchableOpacity, View, RefreshControl, SafeAreaView, ScrollView } from "react-native";
import { Actions } from "react-native-router-flux";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import Api from '../../api/Api'
const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}


const Package = ({ route }) => {
    const navigation = useNavigation();
    const { data_id } = route.params;

    const [packageDetail, setpackageDetail] = useState([]);
    const [refreshing, setRefreshing] = useState(false);

    // console.log(mypost);
    useEffect(() => {
        Api.get("getPackage/" + data_id)
            .then(response => {
                setpackageDetail(response.data)
                //console.log(response.data);
            })
            .catch(error => {
                // console.log(error);
            });
    }, [data_id]);


    const reload = () => {
        Api.get("getPackage/" + data_id)
            .then(response => {
                setpackageDetail(response.data)
                //console.log(response.data)
            })
            .catch(error => {
                console.log(error.message);
            });
    }

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        reload()
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return (
        <>
            <View>
                <Header
                    androidStatusBarColor="#ff5722"
                    searchBar
                    rounded
                    style={{ backgroundColor: "#ff5722" }}
                >
                    <Text style={styles.textHead}>งานของฉัน {data_id}</Text>
                </Header>
            </View>
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
                    <Content>
                        {packageDetail.map((packageDetails) => {
                            return (
                                <Card transparent>
                                    <TouchableOpacity activeOpacity={0.6} onPress={() => {
                                        navigation.navigate('editpack', {
                                            pk_id: packageDetails.pk_id,
                                        });
                                    }}>
                                        <Card style={styles.from} >
                                            <Label style={styles.text16}>{packageDetails.pk_name}</Label>
                                        </Card>
                                    </TouchableOpacity>
                                </Card>
                            )
                        })}
                        <Body>
                            <Button block style={styles.button} onPress={() => navigation.navigate('addpack', {
                                awpk_id: data_id,
                            })}>
                                <Text style={styles.text22}>เพิ่มแพ็กเกจ</Text>
                            </Button>
                        </Body></Content>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};
const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    textHead: {
        color: "#fff",
    },
    text: {
        color: "#ff5722",
        fontSize: 24,
        marginBottom: 5,
    },
    CardItem: {
        marginTop: 10,
        borderRadius: 10,
        backgroundColor: "#fff",
    },
    body: {
        marginLeft: 10,
    },
    textTitle: {
        textShadowColor: "#4E4E4E",
        textShadowOffset: { width: -1, height: 0.5 },
        textShadowRadius: 5,
        elevation: 5,
        fontSize: 22,
        color: "#000",
    },
    textDes: {
        elevation: 5,
        paddingTop: 5,
        fontSize: 15,
        color: "#000",
    },
    button: {
        color: "#fff",
        backgroundColor: "#ff5722",
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        width: 200,
    },
    text22: {
        fontSize: 22,
        color: "#ffff",
    },
    from: {
        marginTop: 10,
        backgroundColor: "#fff",
        padding: 10,
        margin: 8,
        marginBottom: -3,
        borderRadius: 6,
        elevation: 5,
    },
    text16: {
        fontSize: 20,
    },
    item: {
        borderRadius: 5,
        marginBottom: 9,
    },
});

export default Package
