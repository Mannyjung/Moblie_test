import React from 'react';
import { Image, View, StyleSheet, ScrollView, TouchableOpacity, Handle } from 'react-native'
import {
    Card, Col, Item, Input, Container, Header, Content, Button, Text, CardItem, Left, Right, Body
} from 'native-base';
import Fromadd from '../component/addwork/Fromadd';
import FromAddV2 from '../component/addwork/FromAddV2';
const AddWork = () => {
    return (
        <>
            <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                    <Text style={styles.textHead}>
                        เพิ่มงาน
                    </Text>
                </Header>
            </View>
            <FromAddV2 key='FromAddV2r' />
        </>
    )
}
const styles = StyleSheet.create({
    textHead: {
        marginTop: 10,
        color: '#ffff',
        fontSize: 22
    },

})

export default AddWork
