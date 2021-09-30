import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Dimensions, Alert, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import { Content, Card, CardItem, Body, Right, Button } from "native-base";
import axios from 'axios';
import Api from '../../api/Api'
const { width } = Dimensions.get('screen');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const WaitFree = ({ Userid_w }) => {
  let userID = Userid_w
  //console.log(userID);
  const [getwaitemp, setGetwaitemp] = useState([]);

  const [refreshing, setRefreshing] = useState(false);

  
  useEffect(() => {
    Api.get("employmentEpyReq/" + userID)
    //Api.get("employmentEpyReqGet/" + userID)
      .then(response => {
        setGetwaitemp(response.data)
        //console.log(response.data)
      })
      .catch(error => {
        console.log(error.message);
      });
  }, [userID]);

  const reload = () => {
    Api.get("employmentEpyReq/" + userID)
      .then(response => {
        setGetwaitemp(response.data)
        //console.log(response.data)
      })
      .catch(error => {
        console.log(error.message);
      });
  }
  
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    reload()
    wait(2000).then(() => setRefreshing(false));
  }, []);




  const showConfirm = async (emm_id) => {
    await Alert.alert(
      "การยกเลิกการจ้างงาน",
      "คุณต้องการยกเลิกการจ้างงานหรือไม่ ?",
      [
        {
          text: "ยกเลิก",
          style: "cancel"
        },
        {
          text: "ตกลง",
          onPress: () => cancelEmploy(emm_id)
        }
      ]
    )
  };

  const cancelEmploy = async (emm_id) => {
    Api.delete("deleteemploymentReq/" + emm_id)
      .then((response) => {
        if (response.data.message === "success") {
          Alert.alert("ยกเลิกการจ้างงานเรียบร้อย")
          reload()
        } else {
          Alert.alert("เกิดปัญหากับระบบกรุณาลองใหม่อีกครั้งภายหลัง")
          reload()
        }
      });

  };


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >

        <Content padder>
          {getwaitemp.map((getwait, index) => {
            return (
              <Card key={index}>
                <CardItem header bordered>
                  <Body>
                    <Text style={styles.text}>
                      ฟรีแลนซ์
                    </Text>
                    <Text style={styles.content}>
                      : {getwait.emm_std_id}
                    </Text>
                  </Body>

                  <Body>
                    <Text style={styles.text}>
                      วันที่
                    </Text>
                    <Text style={styles.content}>
                      {getwait.emm_date_time}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text style={styles.text}>
                      ชื่องาน
                    </Text>
                    <Text style={styles.content}>
                      {getwait.aw_name}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text style={styles.text}>
                      ชื่อแพ็คเก็จ
                    </Text>
                    <Text style={styles.content}>
                      {getwait.pk_name}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text style={styles.text}>
                      สถานะ
                    </Text>
                    <Text style={styles.content}>
                      {getwait.emm_status}
                    </Text>
                  </Body>
                  <Right>

                    <Button style={styles.butt} onPress={() => showConfirm(getwait.emm_id)}>
                      <Text style={{ color: '#fff' }}>
                        ยกเลิก
                      </Text>
                    </Button>
                  </Right>
                </CardItem>
              </Card>
            )
          })}
        </Content>
      </ScrollView>
    </SafeAreaView>
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
    backgroundColor: '#FB1F1F',
  }
})


export default WaitFree
