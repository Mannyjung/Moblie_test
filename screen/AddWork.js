import React from 'react'
import { Image, View, StyleSheet, ScrollView, TouchableOpacity, Handle } from 'react-native'
import {
    Card, Col, Item, Input, Container, Header, Content, Button, Text, CardItem, Left, Right, Body
} from 'native-base';
import Fromadd from '../component/addwork/Fromadd';
const AddWork = () => {
    return (
        <>
            <View>
                <Header androidStatusBarColor="#EEEEEE" searchBar rounded style={{ backgroundColor: '#DADADA' }}>
                    <Text style={styles.textHead}>
                        เพิ่มงาน
                    </Text>
                </Header>

            </View>
            <Fromadd />
        </>
    )
}
const styles = StyleSheet.create({
    textHead: {
        marginTop: 10,
        color: '#ff5722',
        fontSize: 22
    }
})

export default AddWork
