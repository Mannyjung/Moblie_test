import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Dimensions, Alert } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Left, Right, Button } from "native-base";
import axios from 'axios';
const { width, height } = Dimensions.get('screen')

const SucEmp = ({ Userid }) => {
  const [getsuccess, setSuccess] = useState([]);
  useEffect(() => {
    axios.get("http://newapi-flashwork.herokuapp.com/public/employmentEpySuc/" + Userid)
      .then(response => {
        setSuccess(response.data)

      })
      .catch(error => {

      });
  }, [Userid]);

  return (
    <Content padder>
      {getsuccess.map((getsucc) => {
        return (
          <Card>
            <CardItem header bordered>
              <Body>
                <Text style={styles.text}>
                  ฟรีแลนซ์
                </Text>
                <Text style={styles.content}>
                  : {getsucc.emm_std_id}
                </Text>
              </Body>

              <Body>
                <Text style={styles.text}>
                  วันที่
                </Text>
                <Text style={styles.content}>
                  {getsucc.emm_date_time}
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.text}>
                  ชื่องาน
                </Text>
                <Text style={styles.content}>
                  {getsucc.aw_name}
                </Text>
              </Body>
              <Body>
                <Text style={styles.text}>
                  ชื่อแพ็คเก็จ
                </Text>
                <Text style={styles.content}>
                  {getsucc.pk_name}
                </Text>
              </Body>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Text style={styles.text}>
                  สถานะ
                </Text>
                <Text style={styles.content}>
                  {getsucc.emm_status}
                </Text>
              </Body>
              <Right>
                <Button style={styles.butt} >
                  <Text style={{ color: '#fff' }}>
                    รีวิว
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

export default SucEmp

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


