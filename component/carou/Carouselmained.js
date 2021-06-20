import React from 'react'
import { Text, View } from 'react-native'
import Carousel from './Carousel'
import { Data } from './data'

const Carouselmained = () => {
    return (
        <>
            <View>
                <Carousel key="carousel" data={Data} />
            </View>
        </>
    )
}

export default Carouselmained
