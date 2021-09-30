import {
    Body,
    Card,
    CardItem,
    Button,
    Header,
    Item,
    Form,
    Label,
    Input,
    Textarea,
    Content,
} from "native-base";
import React, { useState, useEffect } from 'react'
import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import { Picker } from '@react-native-picker/picker';
import { Actions } from "react-native-router-flux";
import { useNavigation } from '@react-navigation/native';
import axios from 'axios'
import Api from '../../api/Api'

const Editpack = ({ route }) => {
    const navigation = useNavigation();
    const { pk_id } = route.params;
    //const [selectedValue, setSelectedValue] = useState("");

    const [packageDetailbyid, setpackageDetailbyid] = useState([]);
    // console.log(mypost);
    useEffect(() => {
        Api.get("getPackagebyId/" + pk_id)
            .then(response => {
                setpackageDetailbyid(response.data[0])
                //console.log(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, [pk_id]);

    const [editpackage, seteditpackage] = useState(
        {
            pk_name: "",
            pk_detail: "",
            pk_price: "",
            pk_time_period: "",
        }
    );

    const showConfirm = async () => {
        await Alert.alert(
            "แก้ไขแพ็คเกจ",
            "คุณต้องการแก้ไขแพ็คเกจหรือไม่ ?",
            [
                {
                    text: "ยกเลิก",
                    //onPress: () => console.log(pk_id,pk_name),
                    style: "cancel"
                },
                {
                    text: "ตกลง",
                    onPress: () => savePack()
                    //onPress: () => console.log(dataPost),
                }
            ]
        )
    };
    const savePack = () => {
        //console.log(editpackage);
        var data = {
            pk_name: editpackage.pk_name,
            pk_detail: editpackage.pk_detail,
            pk_price: editpackage.pk_price,
            pk_time_period: editpackage.pk_time_period,
        }
        //console.log(data);
        Api.put("editpackage/" + pk_id, data)
            .then((response) => {
                if (response.data.message === "success") {
                    Alert.alert("แก้ไขเรียบร้อย")
                    seteditpackage({ ...editpackage, data })
                    navigation.navigate('package')

                } else {
                    Alert.alert("เกิดปัญหากับระบบกรุณาลองใหม่อีกครั้งภายหลัง")
                }
            })
            .catch((error) => {
                console.log(error);

            });

    }


    //console.log(editpackage)
    let timed = packageDetailbyid.pk_time_period;
    return (
        <>
            <View>
                <Header
                    androidStatusBarColor="#ff5722"
                    searchBar
                    rounded
                    style={{ backgroundColor: "#ff5722" }}
                >
                    <Text style={styles.textHead}>แพ็คเกจของฉัน {pk_id}</Text>
                </Header>
            </View>
            <Content>
                <Card transparent>
                    <Form style={styles.from}>
                        <Label style={styles.text16}>ชื่อแพ็คเกจ</Label>
                        <Item style={styles.item} regular>
                            <Input
                                defaultValue={packageDetailbyid.pk_name}
                                onChangeText={(e) => seteditpackage({ ...editpackage, pk_name: e })}
                            />
                        </Item>
                        <Label style={styles.text16}>ลายละเอียดรายแพ็คเกจ</Label>
                        <Item style={styles.item} regular>
                            {/* <Input rowSpan={5} bordered /> */}
                            <Textarea
                                rowSpan={3}
                                defaultValue={packageDetailbyid.pk_detail}
                                onChangeText={(e) => seteditpackage({ ...editpackage, pk_detail: e })}
                            />
                        </Item>
                        <Label style={styles.text16}>ราคา</Label>
                        <Item style={styles.item} regular>
                            <Input
                                defaultValue={packageDetailbyid.pk_price}
                                onChangeText={(e) => seteditpackage({ ...editpackage, pk_price: e })}
                            />
                        </Item>
                        <Label style={styles.text16}>ระยะเวลา</Label>

                        <Picker
                            selectedValue={editpackage.pk_time_period}
                            style={{ height: 50 }}
                            onValueChange={(e) => seteditpackage({ ...editpackage, pk_time_period: e })}
                        >
                            {/* <Picker.Item label={timed} /> */}
                            <Picker.Item label="3 วัน" value="ภายใน 3 วัน" />
                            <Picker.Item label="7 วัน" value="ภายใน 7 วัน" />
                            <Picker.Item label="14 วัน" value="ภายใน 14 วัน" />
                            <Picker.Item label="30 วัน" value="ภายใน 30 วัน" />
                        </Picker>
                    </Form>



                </Card>
                <Body>
                    <Button block style={styles.button} onPress={() => showConfirm()}>
                        <Text style={styles.text22}>บันทึก</Text>
                    </Button>
                </Body></Content>
        </>
    );
};
const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    textHead: {
        color: "#fff",
    },
    text: {
        color: "#ff5722",
        fontSize: 24,
        marginBottom: 5,
    },
    CardItem: {
        marginTop: 10,
        borderRadius: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: "#fff",
    },
    body: {
        marginLeft: 10,
    },
    textTitle: {
        textShadowColor: "#4E4E4E",
        textShadowOffset: { width: -1, height: 0.5 },
        textShadowRadius: 5,
        elevation: 5,
        fontSize: 22,
        color: "#000",
    },
    textDes: {
        elevation: 5,
        paddingTop: 5,
        fontSize: 15,
        color: "#000",
    },
    button: {
        color: "#fff",
        backgroundColor: "#ff5722",
        marginTop: 20,
        marginBottom: 15,
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 1,
        shadowRadius: 3,
        elevation: 5,
        width: 200,
    },
    text22: {
        fontSize: 22,
        color: "#ffff",
    },
    from: {
        backgroundColor: "#fff",
        padding: 10,
        margin: 8,
        marginBottom: -3,
        borderRadius: 12,
        shadowColor: "#000",
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
    },
    text16: {
        fontSize: 16,
    },
    item: {
        borderRadius: 5,
        marginBottom: 9,
    },
});
export default Editpack;