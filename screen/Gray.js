import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
const Gray = () => {
    return (
        <>
            <View style={styless.container}>
                <Text style={styless.welcome}
                onPress={() => Actions.gold()}>
                    Gray
                </Text>

            </View>
        </>
    )
}
const styless = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',

    },
    welcome: {
        fontSize: 100,
        textAlign: 'center',
        margin: 10,
        color:'#fff'
    }

})

export default Gray
