import React from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native'
import { Header } from 'native-base'
import DetailPost from '../component/Post/DetailPost'
import Review from '../component/Post/Review'
import Package from '../component/Post/Package'
import { Data } from '../component/carou/data'
import Carouselmained from '../component/carou/Carouselmained'
const SelectPost = ({ dataW }) => {
    return (
        <>

            <View style={styles.container}>
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                    <Text style={styles.text}>
                        {dataW.aw_id}
                    </Text>

                </Header>
                <View style={styles.view} >
                    <ScrollView >
                        <Carouselmained />
                        <DetailPost />
                        <Package />
                        {/* <Review /> */}
                    </ScrollView>
                </View>
            </View>


        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 60
    },
    item: {
        width: '100%'
    },

    btpack: {
        backgroundColor: '#F57C00'
    }
    ,
    text: {
        fontSize: 25,
        color: '#ffff',
        marginTop: 10
    }
})

export default SelectPost
