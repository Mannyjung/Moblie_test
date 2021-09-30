import { Button, Card, Content, Form, Header, Input, Item, Label, Textarea, View } from 'native-base'
import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, Alert } from 'react-native'
import { Picker } from '@react-native-picker/picker';
import axios from 'axios'
import { useNavigation } from '@react-navigation/native';
import Api from '../../api/Api'

const Addpackage = ({ route }) => {
    const [selectedValue, setSelectedValue] = useState();
    //console.log(selectedValue)
    const navigation = useNavigation();
    const { awpk_id } = route.params;

    const [addpackage, setaddpackage] = useState(
        {
            pk_name: "",
            pk_detail: "",
            pk_aw_id: awpk_id,
            pk_price: "",
            pk_time_period: "",
        }
    );

    const savePack = () => {
        console.log(addpackage);

        Api.post("newpackage", addpackage)
            .then((response) => {

                if (response.data.message === "success") {
                    Alert.alert("บันทึกเรียบร้อย")
                } else {
                    Alert.alert("เกิดปัญหากับระบบกรุณาลองใหม่อีกครั้งภายหลัง")
                }
            })

            .then(() => {
                navigation.navigate('package')
            })
            .catch((error) => {
                console.log(error);

            });

    }

    return (
        <>
            <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                    <Text style={styles.textHead}>
                        เพิ่มแพ็คเกจ {awpk_id}
                    </Text>
                </Header>
            </View>
            <View style={styles.view}>
                <Content style={styles.heades}>

                    <Card transparent>
                        <Form style={styles.from}>

                            <Label style={styles.text16}>ชื่อแพ็คเกจ</Label>
                            <Item style={styles.item} regular>
                                <Input onChangeText={(e) => setaddpackage({ ...addpackage, pk_name: e })} />
                            </Item>
                            <Label style={styles.text16}>ลายละเอียดรายแพ็คเกจ</Label>
                            <Item style={styles.item} regular>

                                <Textarea rowSpan={13} onChangeText={(e) => setaddpackage({ ...addpackage, pk_detail: e })} />
                            </Item>
                            <Label style={styles.text16}>ราคา</Label>
                            <Item style={styles.item} regular>
                                <Input onChangeText={(e) => setaddpackage({ ...addpackage, pk_price: e })} />
                            </Item>
                            <Label style={styles.text16}>ระยะเวลา</Label>
                            <Picker
                                selectedValue={addpackage.pk_time_period}
                                style={{ height: 50 }}
                                onValueChange={(e) => setaddpackage({ ...addpackage, pk_time_period: e })}
                            >
                                <Picker.Item label="เลือกระยะเวลา" value="" />
                                <Picker.Item label="3 วัน" value="ภายใน 3 วัน" />
                                <Picker.Item label="7 วัน" value="ภายใน 7 วัน" />
                                <Picker.Item label="14 วัน" value="ภายใน 14 วัน" />
                                <Picker.Item label="30 วัน" value="ภายใน 30 วัน" />
                            </Picker>
                        </Form>
                    </Card>
                    <Button block style={styles.button} onPress={() => savePack()} >
                        <Text style={styles.text22}  >บันทึก</Text>
                    </Button>

                </Content>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    view: {
        flex: 1
    },
    textHead: {
        color: '#fff',

    },
    text: {
        color: '#ff5722',
        fontSize: 24,
        marginBottom: 5
    },
    from: {

        backgroundColor: '#fff',
        padding: 10,
        margin: 8,
        marginBottom: -3,
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
    item: {
        borderRadius: 5,
        marginBottom: 9,

    },
    button: {
        color: '#fff',
        backgroundColor: '#ff5722',
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
    },
    text22: {
        fontSize: 22,
        color: '#ffff'
    },

})
export default Addpackage
