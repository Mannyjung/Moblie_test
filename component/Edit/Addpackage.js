import { Body, Button, Card, CardItem, Content, Form, Header, Input, Item, Label, Textarea, View } from 'native-base'
import React from 'react'
import { useState } from 'react';
import { Picker, StyleSheet, Text } from 'react-native'

const Addpackage = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
        <>
           <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                    <Text style={styles.textHead}>
                        งานของฉัน  614259048
                    </Text>
                </Header>
            </View>
            <View style={styles.view}>
                <Content style={styles.heades}>
                    
                <Card transparent>
                        <Form style={styles.from}>

                            <Text style={styles.text}>
                                เพิ่มแพ็คเกจ
                            </Text>


                            <Label style={styles.text16}>ชื่อแพ็คเกจ</Label>
                            <Item style={styles.item} regular>
                                <Input />
                            </Item>
                            <Label style={styles.text16}>ลายละเอียดรายแพ็คเกจ</Label>
                            <Item style={styles.item} regular>
                                {/* <Input rowSpan={5} bordered /> */}
                                <Textarea rowSpan={13} />
                            </Item>
                            <Label style={styles.text16}>ราคา</Label>
                            <Item style={styles.item} regular>
                                <Input />
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
                    <Button block style={styles.button} >
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
