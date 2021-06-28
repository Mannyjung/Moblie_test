import React from 'react'
import { View, Image, StyleSheet } from 'react-native';
import {
    Content,
    Card,
    CardItem,
    Thumbnail,
    Text,
    Left,
    Body,
    Right, Button, Title, List, ListItem, Header, Icon
} from 'native-base';
const Package = () => {
    return (
        <>
            <View style={styles.item}>
                <Card>
                    <CardItem header style={styles.work}>
                        <Title style={{ color: '#000000' }}>
                            Package A [สร้าง1-10ล้าน backlinks]
                        </Title>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                - ลูกค้าจะได้รับ 1-3 ล้าน Backlinks
                                - White Hat SEO 100%
                                - Natural Backlink ตรงตามหลัก Google Algorithm
                                - ใช้ระยะเวลา 7-14 วัน ในการทำงาน
                                - รายงานลิงค์ที่ลงเเล้วเมื่อเสร็จงาน
                            </Text>
                        </Body>
                    </CardItem>
                    <Button full style={styles.btpack} >
                        <Text>ราคา 15000 บาท</Text>
                    </Button>
                </Card>
                <Card>
                    <CardItem header style={styles.work}>
                        <Title style={{ color: '#000000' }}>
                            Package B
                        </Title>
                    </CardItem>
                    <CardItem>
                        <Body>
                            <Text>
                                - ลูกค้าจะได้รับ 500 - 700 Backlinks คุณภาพสูง DA PA 35-78
                                - White Hat SEO 100%
                                - Natural Backlink ตรงตามหลัก Google Algorithm
                                - ใช้ระยะเวลา 7-14 วัน ในการทำงาน
                                - รายงานลิงค์ที่ลงเเล้วเมื่อเสร็จงาน

                            </Text>
                        </Body>
                    </CardItem>
                    <Button full style={styles.btpack} >
                        <Text>ราคา 20000 บาท</Text>
                    </Button>
                </Card>
            </View>

            {/* <Card style={{ elevation: 2 }}>
                <List thumbnail>
                    <Left>
                        <Thumbnail source={{ uri: 'https://i.pinimg.com/236x/e8/55/d4/e855d447720358bc71da3b38cd7ff950.jpg' }} />
                        <Body>
                            <Text>ชื่อ - นามสกุล</Text>
                            <Text note>NativeBase</Text>
                        </Body>
                    </Left>
                    <Right>
                        <Text>
                            ผู้โพสต์งาน
                        </Text>
                    </Right>
                </List>
            </Card> */}
        </>
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
    }
})

export default Package
