import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
const Gold = () => {
    return (
        <>
            <View style={styless.container}>
                <Text style={styless.welcome} onPress={() => Actions.gray()}>
                    Gold
                </Text>
                <Text style={styless.welcome} onPress={() => Actions.model()}>
                    Model
                </Text>

            </View>
        </>
    )
}
const styless = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFC400',
        justifyContent: 'center',
        alignItems: 'center',

    },
    welcome: {
        fontSize: 100,
        textAlign: 'center',
        margin: 10,
        color: '#fff'
    }

})

export default Gold
