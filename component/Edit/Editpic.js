import React from 'react'
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native'
import { Data } from '../carou/data'
const { width, height } = Dimensions.get('screen')
const Editpic = () => {
    return (
        <>
            <View style={styles.view}>
              
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection:'row',
        // flexWrap:'wrap',
    },
    pic: {
        width:width/2,
        height:height/2,

    }
})

export default Editpic
