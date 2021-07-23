import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Dimensions } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Left, Right, Button, View } from "native-base";
import axios from 'axios';
const { width, height } = Dimensions.get('screen')
const Success = ({Userid}) => {


  const [employmentFlSuc, setemploymentFlSuc] = useState([]);
  useEffect(() => {
    axios.get("https://newapi-flashwork.herokuapp.com/public/employmentFlSuc/" + Userid)
      .then(response => {
        setemploymentFlSuc(response.data)
        //console.log(response.data)
      })
      .catch(error => {
        console.log(error);
      });

  }, [Userid]);
  return (
    <Content padder>
      {employmentFlSuc.map((employmentFlSucs) => {
        return (
        
            <Card key={employmentFlSucs.emm_id}>
              <CardItem header bordered>
                <Body>
                  <Text style={styles.text}>
                    ผู้ว่าจ้าง
                  </Text>
                  <Text style={styles.content}>
                    {employmentFlSucs.emm_user_id}
                  </Text>
                </Body>

                <Body>
                  <Text style={styles.text}>
                    วันที่
                  </Text>
                  <Text style={styles.content}>
                    {employmentFlSucs.aw_date_post}
                  </Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.text}>
                    ชื่องาน
                  </Text>
                  <Text style={styles.content}>
                    {employmentFlSucs.aw_name}
                  </Text>
                </Body>
                <Body>
                  <Text style={styles.text}>
                    ชื่อแพ็คเก็จ
                  </Text>
                  <Text style={styles.content}>
                    {employmentFlSucs.pk_name}
                  </Text>
                </Body>
              </CardItem>
              <CardItem bordered>
                <Body>
                  <Text style={styles.text}>
                    สถานะ
                  </Text>
                  <Text style={styles.content}>
                    {employmentFlSucs.emm_status}
                  </Text>
                </Body>

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

export default Success
