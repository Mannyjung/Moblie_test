import React from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Left, Right, Button } from "native-base";
const {width,height} = Dimensions.get('screen')
const WaitEM = () => {
  return (
    <Content padder>
      <Card>
        <CardItem header bordered>
          <Body>
            <Text style={styles.text}>
              ผู้ว่าจ้าง
            </Text>
            <Text style={styles.content}>
              : kong 5555
            </Text>
          </Body>

          <Body>
            <Text style={styles.text}>
              วันที่
            </Text>
            <Text style={styles.content}>
              2021-07-03/20:12
            </Text>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text style={styles.text}>
              ชื่องาน
            </Text>
            <Text style={styles.content}>
              SEO ขั้นเทพ | สร้าง 1-10 ล้าน backlinks เพิ่มอันดับเว็บให้ติดหน้าแรกๆ GOOGLE
            </Text>
          </Body>
          <Body>
            <Text style={styles.text}>
              ชื่อแพ็คเก็จ
            </Text>
            <Text style={styles.content}>
              Package A 1-1 ล้าน backlinks
            </Text>
          </Body>
        </CardItem>
        <CardItem bordered>
          <Body>
            <Text style={styles.text}>
              สถานะ
            </Text>
            <Text style={styles.content}>
              รอดำเนินการ
            </Text>
          </Body>
          <Right>
            <Button style={styles.butt}>
              <Text style={{ color: '#fff' }}>
                ยอมรับ
              </Text>
            </Button>
          </Right>
        </CardItem>
      </Card>
    </Content>
  )
}
const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    color: '#ff5722',
  },
  content: {
    fontSize: 17,
    paddingLeft: 6,
    paddingRight: 8
  },
  butt: {
    padding: 10,
    height: -5,
    width: width/2.5 ,
    backgroundColor: '#559999',
  }
})

export default WaitEM
