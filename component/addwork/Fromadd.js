import React, { useState, useEffect } from 'react'
import { Image, View, StyleSheet, ScrollView, TouchableOpacity, Picker, TextInput, Button } from 'react-native'
import {
    Card, Item, Input, Content, Text, CardItem, Body, Form, Label, Textarea
} from 'native-base';
import axios from 'axios'
//import Icon from 'react-native-vector-icons/dist/FontAwesome'
const Fromadd = () => {
    const [selectedValue, setSelectedValue] = useState("java");


    const [maincategory, setMaincategory] = useState(
        {
        main_cate_name: "",
        main_cate_img: "",
        status :"Admin"
        }
    );
    const saveMaincate = () => {

        axios.post("https://newapi-flashwork.herokuapp.com/public/addmaincate", maincategory)
            .then((response) => {
                console.log(maincategory);

            })
            .catch((error) => {
                console.log(error);

            });

    }
    return (
        <>
            <View style={styles.view}>
                <Content style={styles.heades}>
                    <Card transparent>

                        <Form style={styles.from}>
                            <CardItem style={styles.headCard}>
                                <Body >
                                    <Text style={{ color: '#ff5722', fontSize: 22 }}>
                                        เนื้อหา
                                    </Text>
                                </Body>
                            </CardItem>
                            {/* <Label style={styles.text16}>ชื่องาน</Label>
                            <Item>
                                <TextInput />
                            </Item> */}
                            <Label style={styles.text16}>หมวดหลัก </Label>

                            <Input name="main_cate_name" onChangeText={(e) => setMaincategory({ ...maincategory, main_cate_name: e })} />
                            <Input name="main_cate_img" onChangeText={(e) => setMaincategory({ ...maincategory, main_cate_img: e })} />
                            <Button
                                title="ตกลง"
                                onPress={() => saveMaincate()}
                            />
                        </Form>
                    </Card>



                </Content>
            </View>

        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    heades: {
        // flex: 1,

        paddingRight: 8,
        paddingLeft: 8
    },
    headCard: {
        position: 'relative',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#595959'
    },
    from: {

        backgroundColor: '#fff',
        padding: 10,
        margin: 10,
        marginTop: -8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    text16: {
        fontSize: 16
    },
    text22: {
        fontSize: 22
    },
    text28: {
        fontSize: 28
    },
    icon: {
        marginTop: 5,
        fontSize: 100,
        textShadowColor: '#000',
        textShadowOffset: { width: -1, height: 0.5 },
        textShadowRadius: 5,
        color: '#ff5743'
    },
    fromIcon: {

        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        margin: 15,
        marginTop: -8,
        borderRadius: 12,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    }

});

export default Fromadd
