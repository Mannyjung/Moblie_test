import {  Header } from 'native-base'
import React, { useState} from 'react'
import { Modal, Text, Image, View, StyleSheet, Dimensions, Pressable, TouchableOpacity } from 'react-native'
import { Data } from '../carou/data'
import { AntDesign } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')
const Editpic = () => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <>
            <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                <Text style={styles.textStyle}>
                    รูป
                </Text>
            </Header>
            <View style={styles.view} >
                {Data.map((uri) => {
                    return (
                        <TouchableOpacity onPress={() => setModalVisible(true)} key={uri.id}>
                            <Image source={{ uri: uri.url }} style={styles.pic} />
                        </TouchableOpacity>
                    )
                })}
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                >
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <AntDesign name="closecircleo" style={styles.btnclose} onPress={() => setModalVisible(!modalVisible)} />
                            <Pressable
                                style={[styles.button, styles.btnDelete]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>ลบ</Text>
                            </Pressable>
                            <Pressable
                                style={[styles.button, styles.btnEdit]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>แก้ไข</Text>
                            </Pressable>
                        </View>
                    </View>
                </Modal>
            </View>
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
        width: width / 2,
        height: 150,

    },
    centeredView: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        // margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 15,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 0.5,
        elevation: 3
    },
    button: {
        width: width / 2,
        borderRadius: 20,
        marginTop: 10,
        padding: 10,
        elevation: 2
    },
    btnDelete: {
        backgroundColor: "red",
    },
    btnEdit: {
        backgroundColor: "#3f50cc",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
})

export default Editpic
