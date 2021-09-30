import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Dimensions, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import { Content, Card, CardItem, Body, } from "native-base";
import axios from 'axios';
import Api from '../../api/Api'
const { width } = Dimensions.get('screen')

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const Success = ({ Userid }) => {

  const [refreshing, setRefreshing] = useState(false);
  const [employmentFlSuc, setemploymentFlSuc] = useState([]);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    reload()
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const reload = () => {
    Api.get("employmentFlSuc/" + Userid)
      .then(response => {
        setemploymentFlSuc(response.data)

      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    Api.get("employmentFlSuc/" + Userid)
      .then(response => {
        setemploymentFlSuc(response.data)

      })
      .catch(error => {
        console.log(error);
      });

  }, [Userid]);

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
          {employmentFlSuc.map((employmentFlSucs, index) => {
            return (

              <Card key={index}>
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
                </CardItem>
                <CardItem bordered>
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
  }
})

export default Success
