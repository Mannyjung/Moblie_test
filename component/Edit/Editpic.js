import React from 'react'
import { Text, Image, View, StyleSheet, Dimensions } from 'react-native'
import { Data } from '../carou/data'
const { width, height } = Dimensions.get('screen')
const Editpic = () => {
    return (
        <>
            <View style={styles.view}>
                {Data.map((uri) => {
                    return (
                        <Image source={{ uri: uri.url }} style={styles.pic} />
                    )
                })}
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    pic: {
        width: width / 2,
        height:150
       

    }
})

export default Editpic
