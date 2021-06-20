import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
const Blue = () => {
    return (
        <>
            <View style={styless.container}>
                <Text style={styless.welcome}
                onPress={() => Actions.red()}
                >
                    Blue
                </Text>

            </View>
        </>
    )
}
const styless = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1A00FF',
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

export default Blue
