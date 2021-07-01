import React from 'react'
import {  StyleSheet, Dimensions,Text } from 'react-native';
import { Content, Card, CardItem,  Body, List,Left, Thumbnail, Right} from 'native-base';
import { Foundation  } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen')
const Package = () => {
    return (
        <Content padder style={styles.content} >
            <Card>
                <CardItem header bordered>
                    <Text> Package A [สร้าง1-10ล้าน backlinks]</Text>
                </CardItem>
                <CardItem bordered>
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
                <CardItem footer bordered style={{backgroundColor:'#ff5957'}}> 
                    <Text style={{color:'#fff'}}>ราคา 15000 บาท</Text>
                    <Right style={{paddingLeft:182}}>
                        <Text style={{ color: '#fff' }}>
                            สนใจ
                            <Foundation name="pricetag-multiple" size={18} color="#fff" />
                        </Text>

                    </Right>
                </CardItem>
            </Card>
            <Card style={styles.card}>
                <List avatar>
                    <Left>
                        <Thumbnail source={{ uri: "https://i.pinimg.com/236x/e8/55/d4/e855d447720358bc71da3b38cd7ff950.jpg" }} />
                    </Left>
                    <Body>
                        <Text>ศิวกร รามเรือง</Text>
                    </Body>
                    <Right>
                        <Text>
                            ผู้โพสต์งาน
                        </Text>
                    </Right>
                </List>
            </Card>
        </Content>
    )
}
const styles = StyleSheet.create({

    btpack: {
        backgroundColor: '#F57C00'
    },
    card: {
        padding: 5
    },
    content: {
        marginTop: -20
    }
})

export default Package
