import React, { useState, useEffect } from 'react';
import { Text, StyleSheet, Dimensions, Alert, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import { Container, Header, Content, Card, CardItem, Body, Left, Right, Button } from "native-base";
import axios from 'axios';
import Api from '../../api/Api'
const { width, height } = Dimensions.get('screen');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const WaitEM = ({ Userid }) => {

  const [refreshing, setRefreshing] = React.useState(false);
  const [employmentFlReq, setemploymentFlReq] = useState([]);

  let userID = Userid

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    reload()
    wait(2000).then(() => setRefreshing(false));
  }, []);

  useEffect(() => {
    Api.get("employmentFlReq/" + userID)
      .then(response => {
        setemploymentFlReq(response.data)
      })
      .catch(error => {
        console.log(error);
      });

  }, [userID]);

  const reload = () => {
    Api.get("employmentFlReq/" + userID)
      .then(response => {
        setemploymentFlReq(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

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
  const showConfirmCancel = async (emm_id) => {
    await Alert.alert(
      "การยกเลิกการจ้างงาน",
      "คุณต้องการยกเลิกการจ้างงานหรือไม่ ?",
      [
        {
          text: "ยกเลิก",
          onPress: () => console.log(emm_id),
          style: "cancel"
        },
        {
          text: "ตกลง",
          onPress: () => cancelEmploy(emm_id)
        }
      ]
    )
  };

  const accept = async (emm_id) => {
    let data = {
      emm_status: "กำลังดำเนินการ",
    }
    await axios.put("https://mobileflashwork.herokuapp.com/public/employmentEpyReq/" + emm_id, data)
      .then((response) => {
        if (response.data.message === "success") {
          Alert.alert("ยอมรับการจ้างงานเสร็จสิ้น")
          reload()
        } else {
          Alert.alert("เกิดปัญหากับระบบกรุณาลองใหม่อีกครั้งภายหลัง")
          reload()
        }

      });
  };

  const cancelEmploy = async (emm_id) => {
    axios.delete("https://mobileflashwork.herokuapp.com/public/deleteemploymentReq/" + emm_id)
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === "success") {
          Alert.alert("ยกเลิกการจ้างงานเรียบร้อย")
          reload()
        } else {
          Alert.alert("ยกเลิกการจ้างงานไม่สำเร็จกรุณาลองใหม่ภายหลัง")
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

        </Content>
        <Content padder>
          {employmentFlReq.map((employmentFlReqs, index) => {
            return (

              <Card key={index}>
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
                    <Button style={styles.butt} onPress={() => showConfirm(employmentFlReqs.emm_id)}>
                      <Text style={{ color: '#fff' }}>
                        ยอมรับ
                      </Text>
                    </Button>

                    <Button style={styles.butt1} onPress={() => showConfirmCancel(employmentFlReqs.emm_id)}>
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
    backgroundColor: '#559999',
  },
  butt1: {
    padding: 10,
    height: -5,
    width: width / 2.5,
    marginTop: 4,
    backgroundColor: '#FB1F1F',
  }
})

export default WaitEM
