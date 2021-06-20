import React, { useState } from 'react'
import { Image, View, StyleSheet, ScrollView, TouchableOpacity, Picker } from 'react-native'
import {
    Card, Item, Input, Content, Text, CardItem, Body, Form, Label, Textarea
} from 'native-base';
//import Icon from 'react-native-vector-icons/dist/FontAwesome'
const Fromadd = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <>
            <View style={styles.view}>
                <Content style={styles.heades}>
                    <Card transparent>
                        <CardItem style={styles.headCard}>
                            <Body >
                                <Text style={{ color: '#ff5722', fontSize: 22 }}>
                                    เนื้อหา
                                </Text>
                            </Body>
                        </CardItem>
                        <Form style={styles.from}>
                            <Label style={styles.text16}>ชื่องาน</Label>
                            <Item>
                                <Input />
                            </Item>
                            <Label style={styles.text16}>ลายละเอียดงาน</Label>
                            <Item >
                                {/* <Input rowSpan={5} bordered /> */}
                                <Textarea rowSpan={3} placeholder="ลายละเอียดงาน" />
                            </Item>
                            <Label style={styles.text16}>หมวดหลัก</Label>
                            <Item>
                                <Input />
                            </Item>
                            <Label style={styles.text16}>หมวดย่อย</Label>
                            <Picker
                                selectedValue={selectedValue}
                                style={{ height: 50 }}
                                onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                            >
                                <Picker.Item label="SEO" value="SEO" />
                                <Picker.Item label="Developer" value="dev" />
                            </Picker>
                        </Form>
                    </Card>
                    <Card transparent>
                        <CardItem style={styles.headCard}>
                            <Body >
                                <Text style={{ color: '#ff5722', fontSize: 22 }}>
                                    แพ็คเกจ
                                </Text>
                            </Body>
                        </CardItem>
                        <Form style={styles.from}>
                            <Label style={styles.text16}>ชื่อแพ็คเกจ</Label>
                            <Item>
                                <Input />
                            </Item>
                            <Label style={styles.text16}>ลายละเอียดรายแพ็คเกจ</Label>
                            <Item >
                                {/* <Input rowSpan={5} bordered /> */}
                                <Textarea rowSpan={3} placeholder="ลายละเอียดงาน" />
                            </Item>
                            <Label style={styles.text16}>ราคา</Label>
                            <Item>
                                <Input/>
                            </Item>
                            <Label style={styles.text16}>ระยะเวลา</Label>
                       
                                <Picker
                                    selectedValue={selectedValue}
                                    style={{ height: 50 }}
                                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                                >
                                    <Picker.Item label="7 วัน" value="7" />
                                    <Picker.Item label="30 วัน" value="30" />
                                </Picker>
                         

                        </Form>
                    </Card>

                    <Card transparent>
                        <CardItem style={styles.headCard}>
                            <Body >
                                <Text style={{ color: '#ff5722', fontSize: 22 }}>
                                    รูป
                                </Text>
                            </Body>
                        </CardItem>
                        {/* <Form style={styles.fromIcon}>
                            <Icon name='camera-retro' style={styles.icon} />
                            <Label>เพิ่มรูป</Label>
                        </Form> */}

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
