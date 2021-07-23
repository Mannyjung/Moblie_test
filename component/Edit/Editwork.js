import { Button, Card, Content, Form, Header, Input, Item, Label, Textarea } from 'native-base'
import React, { useState } from 'react'

import { Picker, StyleSheet, Text, View } from 'react-native'
const Editwork = ({ route }) => {
    const { data_id } = route.params;
    console.log(data_id)
    return (
        <>
            <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                    <Text style={styles.textHead}>
                        งานของฉัน  {data_id}
                    </Text>
                </Header>
            </View>
            <Content style={styles.heades}>
                <Card transparent>
                    <Form style={styles.from}>

                        <Text style={styles.text}>
                            แก้ไขงาน
                        </Text>
                        <Label style={styles.text16}>ชื่องาน</Label>
                        <Item style={styles.item} regular>
                            <Input value="รับวาดการ์ตูน ภาพประกอบ ปกนิยาย โปสเตอร์ เว็บคอมมิค" />
                        </Item>
                        <Label style={styles.text16}>ลายละเอียดงาน</Label>
                        <Item style={styles.item} regular>
                            {/* <Input rowSpan={5} bordered /> */}
                            <Textarea rowSpan={12} value="ขั้นตอนการทำงาน
สำหรับ รับวาดการ์ตูน ภาพประกอบ ปกนิยาย โปสเตอร์ เว็บคอมมิค
1. ร่างภาพ จัดองค์ประกอบเพื่อให้ตรงตามบรีฟลูกค้า
2. ตัดเส้น ตรวจสอบผลงานตามความถูกต้อง
3. ลงสีพื้นให้ลูกค้าตวจสอบสี
4. ลงสีภาพทั้งหมด ลูกค้าสามารถขอให้แก้ไขสีได้ไม่เกิน 2 ครั้ง
5. ส่งไฟล์ทางอีเมลล์ให้ลูกกค้า ไฟล์ Psd / Jpeg" placeholder="ลายละเอียดงาน" />
                        </Item>
                        <Label style={styles.text16}>หมวดหลัก</Label>
                        <Item style={styles.item} regular>
                            <Input value="Graphic & Design" />
                        </Item>
                        <Label style={styles.text16}>หมวดย่อย</Label>
                        <Item style={styles.item} regular>
                            <Input value="วาดภาพประกอบ" />
                        </Item>

                        <Button block style={styles.button} >
                            <Text style={styles.text22}  >บันทึก</Text>
                        </Button>
                    </Form>
                </Card>


            </Content>
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
    text16: {
        fontSize: 16
    },
    item: {
        borderRadius: 5,
        marginBottom: 9,

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
    button: {
        color: '#fff',
        backgroundColor: '#ff5722',
        marginTop: 30,
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
    textarea: {
        height: 300
    }
})

export default Editwork