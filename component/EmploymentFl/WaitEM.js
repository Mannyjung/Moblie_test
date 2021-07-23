import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Dimensions, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Left, Right, Button } from "native-base";
import axios from 'axios';
const { width, height } = Dimensions.get('screen')
const WaitEM = ({Userid}) => {
  
let userID = Userid

  const [employmentFlReq, setemploymentFlReq] = useState([]);
  useEffect(() => {
    axios.get("https://newapi-flashwork.herokuapp.com/public/employmentFlReq/" + userID)
      .then(response => {
        setemploymentFlReq(response.data)
        // console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });

  }, [userID]);
  const showConfirm = async (emm_id) => {
    await Alert.alert(
        "ยอมรับการจ้างงาน",
        "คุณยอมรับการจ้างงานหรือไม่ ?",
        [
            {
                text: "ยกเลิก",
                //ronPress: () => console.log(pk_id,pk_name),
                style: "cancel"
            },
            {
                text: "ตกลง",
                onPress: () => accept(emm_id)
            }
        ]
    )
};
  const accept = async (emm_id) => {
    let data = {
        emm_status: "In progress",
    }
    await axios.put("https://newapi-flashwork.herokuapp.com/public/acceptFromFl/" + emm_id, data)
            .then((response) => {
                console.log(response.data.message);
                if (response.data.message === "success") {
                  Alert.alert("ยอมรับการจ้างงานเสร็จสิ้น")
                }

            });
};

  return (
    <Content padder>
      {employmentFlReq.map((employmentFlReqs) => {
        return (
        
            <Card key={employmentFlReqs.emm_id}>
              <CardItem header bordered>
                <Body>
                  <Text style={styles.text}>
                    ผู้ว่าจ้าง
                  </Text>
                  <Text style={styles.content}>
                   {employmentFlReqs.emm_user_id}
                  </Text>
                </Body>

                <Body>
                  <Text style={styles.text}>
                    วันที่
                  </Text>
                  <Text style={styles.content}>
                  {employmentFlReqs.aw_date_post}
                  </Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.text}>
                    ชื่องาน
                  </Text>
                  <Text style={styles.content}>
                  {employmentFlReqs.aw_name}
                  </Text>
                </Body>
                <Body>
                  <Text style={styles.text}>
                    ชื่อแพ็คเก็จ
                  </Text>
                  <Text style={styles.content}>
                  {employmentFlReqs.pk_name}
                  </Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.text}>
                    สถานะ
                  </Text>
                  <Text style={styles.content}>
                    {employmentFlReqs.emm_status}
                  </Text>
                </Body>
                <Right>
                  <Button style={styles.butt}  onPress={() => showConfirm(employmentFlReqs.emm_id)}>
                    <Text style={{ color: '#fff' }}>
                      ยอมรับ
                    </Text>
                  </Button>
                </Right>
              </CardItem>
            </Card>
       
        )
      })}
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
    width: width / 2.5,
    backgroundColor: '#559999',
  }
})

export default WaitEM
