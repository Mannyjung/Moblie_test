import React, { useState, useEffect } from 'react'
import { Text, View, Button, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'

const { width, height } = Dimensions.get('window')
// let flatList
// function inScroll(dataList) {
//     const numberOfData = dataList.length
//     let scrollValue = 0, scrolled = 0
//     setInterval(function () {
//         scrolled++
//         if (scrolled < numberOfData)
//             scrolled = scrollValue + width
//         else {
//             scrollValue = 0
//             scrolled = 0

//         }
//         this.flatList.scrolltoOfset({ Animated: true, offset: scrollValue })
//     },3000)

// }
const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    // const[dataList  ,setDataList] = useState(data)

    // useEffect(() =>{
    //     setDataList(data),
    //     inScroll(dataList)
    // })
    if (data && data.length) {
        return (
            <>
                <View>
                    <FlatList
                        // ref = {(flatList) => {this.flatList = flatList}}
                        data={data}
                        keyExtractor={(item, index) => 'key' + index}
                        horizontal
                        pagingEnabled
                        scrollEnabled
                        snapToAlignment="center"
                        scrollEventThrottle={18}
                        decelerationRate={"fast"}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({ item }) => {
                            return <CarouselItem item={item} />
                        }}
                        onScroll={Animated.event(
                            [{ nativeEvent: { contentOffset: { x: scrollX } } }]
                        )}
                    />
                    <View style={styles.dotView}>
                        {data.map((_, i) => {
                            let opacity = position.interpolate({
                                inputRange: [i - 1, i, i + 1],
                                outputRange: [0.3, 1, 0.3],
                                extrapolast: 'clamp'
                            })
                            return (
                                <>
                                    <Animated.View
                                        key={i}
                                        style={{
                                            opacity,
                                            height: 8,
                                            width: 8,
                                            backgroundColor: "#fff",
                                            margin: 8,
                                            padding: 3,
                                            borderRadius:5
                                        }}
                                    />
                                </>
                            )
                        })
                        }

                    </View>
                </View>
            </>
        )
    }
    console.log({ data })
    return null
}
const styles = StyleSheet.create({
    dotView: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: -30,
    }
})

export default Carousel
