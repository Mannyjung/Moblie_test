import React, {useState} from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = ({title}) => {
    return (
        <>
            <View style={styles.header}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </>
    )
}
Header.defaultProps ={
    title: 'Flashwork'
}
// Header.defaultProps คือการกำหนดค่าเริ่มต้น ของหน้านั้นๆ
const styles = StyleSheet.create({
    header: {
        height: 60,
        padding: 15,
        backgroundColor: 'darkblue'
    },
    text: {
        color: '#fff',
        fontSize: 24,
        textAlign: 'center'
    }
})
export default Header
