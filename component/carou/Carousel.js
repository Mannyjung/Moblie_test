import React from 'react'
import { View, StyleSheet, Dimensions, FlatList, Animated } from 'react-native'
import CarouselItem from './CarouselItem'

const { width, height } = Dimensions.get('window')

const Carousel = ({ data }) => {
    const scrollX = new Animated.Value(0)
    let position = Animated.divide(scrollX, width)
    
    if (data && data.length) {
        return (
            <>
                <View>
                    <FlatList
                       
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
