import { Body, Card, CardItem,Button, Header} from 'native-base'
import React from 'react'
import {StyleSheet, Text, View } from 'react-native'
import { Actions } from 'react-native-router-flux'
const Editpack = () => {
    return (
        <>
            <View >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>
                    <Text style={styles.textHead}>
                        งานของฉัน  614259048
                    </Text>
                </Header>
            </View>
            <Card transparent>
            <CardItem style={styles.CardItem}>
                                       
                                        <Body style={styles.body}>
                                            <Text style={styles.textTitle}>
                                            แพ็กเกจ1
                                            </Text>
                                            
                                            <Text style={styles.textDes}>
                                            วาดการ์ตูนช่องเล่าเรื่องแบบจบในตอนความยาวเรื่องห้ามเกิน1หน้ากระดาษA4 เพื่อประชาสัมพันธ์สินค้าคุณหรือสร้างเนื้อหา FB page ให้ลูกค้า อยากติดตาม
                                            </Text>
                                            <Text style={styles.textDes}>
                                              500฿
                                            </Text>
                                        </Body>
                                    </CardItem>
                                    <CardItem style={styles.CardItem}>
                                       
                                       <Body style={styles.body}>
                                           <Text style={styles.textTitle}>
                                           แพ็กเกจ2
                                           </Text>
                                           <Text style={styles.textDes}>
                                           วาดการ์ตูนช่องเล่าเรื่องแบบจบในตอนความยาวเรื่องห้ามเกิน6หน้ากระดาษA4 เพื่อประชาสัมพันธ์สินค้าคุณหรือสร้างเนื้อหา FB page คุณให้ลูกค้า อยากติดตาม                                            </Text>
                                           <Text style={styles.textDes}>
                                           5000฿
                                           </Text>
                                       </Body>
                                   </CardItem>
            </Card>
            <Body>
            <Button block style={styles.button} onPress={() => Actions.addpack()} >
                                <Text style={styles.text22}  >เพิ่มแพ็กเกจ</Text>
                            </Button></Body>
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
    CardItem: {
        marginTop: 10,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#fff'
    },
    body: {
        marginLeft: 10,
},
textTitle: {
    textShadowColor: '#4E4E4E',
    textShadowOffset: { width: -1, height: 0.5 },
    textShadowRadius: 5,
    elevation: 5,
    fontSize: 22,
    color: '#000'
},
textDes: {
    
    
    elevation: 5,
    paddingTop: 5,
    fontSize: 15,
    color: '#000'
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
    width:200,
    
    
},
text22: {
    fontSize: 22,
    color: '#ffff'
},

})
export default Editpack
