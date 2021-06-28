import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import {
    Content,
    Card,
    CardItem,
    Thumbnail,
    Left,
    Body,
    Right, Button, Title, List, ListItem, Header, Icon
} from 'native-base';
const DetailPost = ({id}) => {
    return (
        <View style={styles.item}>
            
            <Card transparent>
                <CardItem header style={styles.work} >
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
        </View>

    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        width: '100%'
    },

    btpack: {
        backgroundColor: '#F57C00'
    },
})

export default DetailPost

