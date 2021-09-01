import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Dimensions, Alert, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import { Content, Card, CardItem, Body, Right, Button } from "native-base";
import axios from 'axios';
import Api from '../../api/Api'
const { width } = Dimensions.get('screen');

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const WaitFree = ({ Userid }) => {
  const [refreshing, setRefreshing] = useState(false);
  const [getwaitemp, setGetwaitemp] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    reload()
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const reload = () => {
    Api.get("employmentEpyReq/" + Userid)
      .then(response => {
        setGetwaitemp(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    Api.get("employmentEpyReq/" + Userid)
      .then(response => {
        setGetwaitemp(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }, [Userid]);

  const showConfirm = async (emm_id) => {
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

  const cancelEmploy = async (emm_id) => {
    axios.delete("https://newapi-flashwork.herokuapp.com/public/deleteFromEpy/" + emm_id)
      .then((response) => {
        console.log(response.data.message);
        if (response.data.message === "success") {
          Alert.alert("ยกเลิกการจ้างงานเรียบร้อย")
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
