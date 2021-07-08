
import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Button } from 'native-base'
import AsyncStorage from '@react-native-async-storage/async-storage';
const Loadding = ({ navigation }) => {
    const [data, setdata] = useState({
        Status: ""
    })
    useEffect(() => {
        onLoad()
    }, []);
    const onLoad = async () => {
        const status = await AsyncStorage.getItem('status');
        setdata({ ...data, Status: status })
    }
    return (
        <View style={styles.view}>

            <Button onPress={() => navigation.navigate('Profile')}>
                <Text >
                    ไปต่อ
                </Text>
            </Button>


        </View>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 100
    }
})

export default Loadding
