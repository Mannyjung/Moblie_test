import React from 'react'
import { Text, View, StyleSheet, ImageBackground, Image } from 'react-native'

const Profile = () => {
    return (
        <>
            <View style={styles.view}>
                <ImageBackground source={{ uri: 'https://storage.googleapis.com/fastwork-static/26a0f24e-ef16-4069-bf6b-eafe96cab47b.jpg' }} style={styles.imageBg}>
                </ImageBackground>
                <View style={styles.viewImg}>
                    <Image
                        source={{ uri: 'https://storage.googleapis.com/fastwork-static/26a0f24e-ef16-4069-bf6b-eafe96cab47b.jpg' }}
                        style={styles.image}
                    />
                </View>
                <Text style={styles.text}>
                    ROSE
                </Text>
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
        width: 190,
        height: 190,
        borderRadius: 100,
        justifyContent: "center",
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        // elevation: 5,
        backgroundColor: '#fff',

    },
    text: {
        marginTop: -300,
        color: "white",
        fontSize: 42,
        fontWeight: "bold",
        textAlign: "center",
        backgroundColor: "#000000a0",

    }
})

export default Profile
