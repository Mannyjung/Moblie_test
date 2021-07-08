import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, RefreshControlBase } from 'react-native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Icon, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tabnew = ({ navigation }) => {

    return (
        <>
           
                <View style={styles.viewicon}>
                    <View style={styles.viewin}>
                        <MaterialIcons onPress={() => navigation.navigate('Mywork')} style={styles.icon} name="work-outline" />
                        <Text style={styles.texticon}>My work</Text>
                    </View>
                    <View style={styles.viewin}>
                        <AntDesign onPress={() => navigation.navigate('Tabnew')} style={styles.icon} name="profile" />
                        <Text style={styles.texticon}>Edit profile</Text>
                    </View>

                    <View style={styles.viewin}>
                        <AntDesign onPress={() => Actions.mywork()} style={styles.icon} name="setting" />
                        <Text style={styles.texticon}>Setting</Text>
                    </View>
                    <View style={styles.viewin}>
                        <MaterialIcons onPress={() => removeValue()} style={styles.icon} name="logout" />
                        <Text style={styles.texticon}>Logout</Text>
                    </View>
                </View>

      
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        backgroundColor: '#595959'
    },
    viewImg: {
        justifyContent: 'center',
        alignItems: 'center',

    },
    imageBg: {
        flex: 1,
        resizeMode: "cover",
        backgroundColor: '#000',
        opacity: 0.6
    },
    image: {
        marginTop: -800,
        marginBottom: 30,
        width: 190,
        height: 190,
        borderRadius: 100,
        justifyContent: "center"

    },
    text: {
        marginTop: -300,
        color: "white",
        fontSize: 45,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0",

    },
    viewicon: {
        flexDirection: "row",
        justifyContent: "center",
        backgroundColor: "#000000a0",

        padding: 20

    },
    viewin: {
        marginRight: 10,
        marginLeft: 10
    },
    icon: {
        fontSize: 23,
        color: '#fff',
        textAlign: 'center',
    },
    texticon: {
        color: '#fff',
        fontSize: 12,
        textAlign: 'center'
    }

})

export default Tabnew