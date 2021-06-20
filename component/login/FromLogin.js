import React from 'react'
import { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native'
const FromLogin = () => {
    const [text, setText] = useState('');
    return (
        <>
            <View style={styles.view}>
                <TextInput
                    style={styles.textInput}
                    placeholder="Type here to translate!"
                    onChangeText={text => setText(text)}
                    defaultValue={text}
                />
                <Text style={{ padding: 10, fontSize: 42 }}>
                    {text.split(' ').map((word) => word && '🍕').join(' ')}
                </Text>
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    textInput: {
       borderColor:'#595959',
       borderWidth:3,
       borderRadius:20,
       margin:3
    },
    view:{
        flex:1,
        marginTop:-500,
        marginLeft:10
    }
})

export default FromLogin
