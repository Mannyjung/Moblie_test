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
import React from "react";
import { useState } from "react";
import { Picker, ScrollView, StyleSheet, Text, View } from "react-native";
import { Actions } from "react-native-router-flux";

const Editpack = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <>
            <View>
                <Header
                    androidStatusBarColor="#ff5722"
                    searchBar
                    rounded
                    style={{ backgroundColor: "#ff5722" }}
                >
                    <Text style={styles.textHead}>งานของฉัน 614259048</Text>
                </Header>
            </View>
            <Content>
                <Card transparent>
                    <Form style={styles.from}>
                        <Label style={styles.text16}>ชื่อแพ็คเกจ</Label>
                        <Item style={styles.item} regular>
                            <Input value="แพ็กเกจ1" />
                        </Item>
                        <Label style={styles.text16}>ลายละเอียดรายแพ็คเกจ</Label>
                        <Item style={styles.item} regular>
                            {/* <Input rowSpan={5} bordered /> */}
                            <Textarea
                                rowSpan={3}
                                value="วาดการ์ตูนช่องเล่าเรื่องแบบจบในตอนความยาวเรื่องห้ามเกิน1หน้ากระดาษA4 เพื่อประชาสัมพันธ์สินค้าคุณหรือสร้างเนื้อหา FB page ให้ลูกค้า อยากติดตาม"
                            />
                        </Item>
                        <Label style={styles.text16}>ราคา</Label>
                        <Item style={styles.item} regular>
                            <Input value="500฿" />
                        </Item>
                        <Label style={styles.text16}>ระยะเวลา</Label>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50 }}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedValue(itemValue)
                            }
                        >
                            <Picker.Item label="เลือก" value="" />
                            <Picker.Item label="7 วัน" value="7" />
                            <Picker.Item label="30 วัน" value="30" />
                        </Picker>
                    </Form>
                    <Form style={styles.from}>
                        <Label style={styles.text16}>ชื่อแพ็คเกจ</Label>
                        <Item style={styles.item} regular>
                            <Input value="แพ็กเกจ1" />
                        </Item>
                        <Label style={styles.text16}>ลายละเอียดรายแพ็คเกจ</Label>
                        <Item style={styles.item} regular>
                            {/* <Input rowSpan={5} bordered /> */}
                            <Textarea
                                rowSpan={3}
                                value="วาดการ์ตูนช่องเล่าเรื่องแบบจบในตอนความยาวเรื่องห้ามเกิน1หน้ากระดาษA4 เพื่อประชาสัมพันธ์สินค้าคุณหรือสร้างเนื้อหา FB page ให้ลูกค้า อยากติดตาม"
                            />
                        </Item>
                        <Label style={styles.text16}>ราคา</Label>
                        <Item style={styles.item} regular>
                            <Input value="500฿" />
                        </Item>
                        <Label style={styles.text16}>ระยะเวลา</Label>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 50 }}
                            onValueChange={(itemValue, itemIndex) =>
                                setSelectedValue(itemValue)
                            }
                        >
                            <Picker.Item label="เลือก" value="" />
                            <Picker.Item label="7 วัน" value="7" />
                            <Picker.Item label="30 วัน" value="30" />
                        </Picker>
                    </Form>


                </Card>
                <Body>
                    <Button block style={styles.button} onPress={() => Actions.addpack()}>
                        <Text style={styles.text22}>เพิ่มแพ็กเกจ</Text>
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