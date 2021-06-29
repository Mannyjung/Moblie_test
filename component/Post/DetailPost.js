import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Card, CardItem, Body, Content } from 'native-base';
const DetailPost = ({ id }) => {
    return (
        <Content padder>
            <Card >
                <CardItem header >
                    <Body >
                        <Text style={{ color: '#000000', fontSize: 20 }}>
                            SEO ขั้นเทพ | สร้าง1-10ล้าน backlinks เสริมด้วย edu/gov เพิ่มอันดับเว็บให้ติดหน้าแรกๆ GOOG
                        </Text >
                    </Body>
                </CardItem>
                <CardItem>
                    <Body>
                        <Text>
                            ขั้นตอนการทำงาน
                            สำหรับ SEO ขั้นเทพ | สร้าง1-10ล้าน backlinks เสริมด้วย edu/gov เพิ่มอันดับเว็บให้ติดหน้าแรกๆ GOOGLE
                            1. เเจ้ง URL เเละ KEYWORD ที่ต้องการ
                            2. ทางเราจะเสนอราคาไป
                            3. หากตกลงกันเเล้ว ลูกค้าชำระเงิน
                            4. เราจะเริ่มสร้าง white hat seo backlink ให้ ใช้เวลาประมาณ 7-14 วัน
                            5. ส่งงานขั้นสุดท้าย เทพจัด
                        </Text>
                    </Body>
                </CardItem>
            </Card>
        </Content>
    )
}
const styles = StyleSheet.create({
    btpack: {
        backgroundColor: '#F57C00'
    },
})

export default DetailPost

