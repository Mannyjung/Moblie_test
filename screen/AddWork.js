import React from 'react';
import {Text, View, StyleSheet } from 'react-native'
import { Header } from 'native-base';
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
            <FromAddV2 key='FromAddV2' />
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
