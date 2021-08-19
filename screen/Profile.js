import React, { useState, useEffect } from 'react'
import { Text, View, StyleSheet, ImageBackground, Image, RefreshControlBase } from 'react-native'
import { MaterialIcons, AntDesign } from '@expo/vector-icons';
import { Icon, Item } from 'native-base';
import { Actions } from 'react-native-router-flux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Main from './Main';
import Tabnew from '../component/Tabnew';
const Profile = ({ navigation }) => {
    const [data, setdata] = useState({
        User_id: "",
        Image: "",
        Name: "",
        Status: ""
    })
    useEffect(() => {
        onLoad()

    }, []);
    const onLoad = async () => {
        const User_id = await AsyncStorage.getItem('User_id');
        const name = await AsyncStorage.getItem('fname');
        const image = await AsyncStorage.getItem('image');
        const status = await AsyncStorage.getItem('status');
        setdata({ ...data, User_id: User_id, Image: image, Name: name, Status: status })
    }
    const removeValue = async () => {
        await AsyncStorage.clear()
        console.log('clear')
        navigation.navigate('login')
    }

    return (
        <>
            <View style={styles.view}>
                <ImageBackground source={{ uri: data.Image ? data.Image : null }} style={styles.imageBg}>
                </ImageBackground>
                <View style={styles.viewImg}>
                    <Image
                        source={{ uri: data.Image ? data.Image : null }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.text}>
                    {data.Name}
                </Text>
                <View style={styles.viewicon}>
                    <View style={styles.viewin}>
                        <MaterialIcons onPress={() => navigation.navigate('mywork')} style={styles.icon} name="work-outline" />
                        <Text style={styles.texticon}>My work</Text>
                    </View>
                    {/* <View style={styles.viewin}>
                        <AntDesign onPress={() => navigation.navigate('Tabnew')} style={styles.icon} name="profile" />
                        <Text style={styles.texticon}>Edit profile</Text>
                    </View>

                    <View style={styles.viewin}>
                        <AntDesign onPress={() => Actions.mywork()} style={styles.icon} name="setting" />
                        <Text style={styles.texticon}>Setting</Text>
                    </View> */}
                    <View style={styles.viewin}>
                        <MaterialIcons onPress={() => removeValue()} style={styles.icon} name="logout" />
                        <Text style={styles.texticon}>Logout</Text>
                    </View>
                </View>
                {/* <Tabnew/> */}
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

export default Profile