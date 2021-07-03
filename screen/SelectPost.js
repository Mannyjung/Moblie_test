import React from 'react'
import { Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { Content, Header } from 'native-base'
import DetailPost from '../component/Post/DetailPost'
import Review from '../component/Post/Review'
import Package from '../component/Post/Package'
import Carouselmained from '../component/carou/Carouselmained'
const { width, height } = Dimensions.get('screen')
const SelectPost = ({ dataW }) => {
    return (
        <>
            <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                <Text style={styles.text}>
                    {dataW.aw_id}
                </Text>
            </Header>
            <Content style={styles.container}>
                <ScrollView >
                    <Carouselmained id={dataW.aw_id} />
                    <DetailPost id={dataW.aw_id} />
                    <Package id={dataW.aw_id} />
                    <Review id={dataW.aw_id} />
                </ScrollView>
            </Content>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: width,
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