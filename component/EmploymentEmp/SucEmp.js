import React, { useState, useEffect } from 'react'
import { Text, StyleSheet, Dimensions, RefreshControl, SafeAreaView, ScrollView } from 'react-native'
import { Content, Card, CardItem, Body, Right, Button } from "native-base";
import axios from 'axios';
import Api from '../../api/Api'
import { useNavigation } from '@react-navigation/native';
const { width, } = Dimensions.get('screen')

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}
const SucEmp = ({ Userid }) => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = useState(false);
  const [getsuccess, setSuccess] = useState([]);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    reload()
    wait(2000).then(() => setRefreshing(false));
  }, []);

  const reload = () => {
    Api.get("employmentEpySuc/" + Userid)
      .then(response => {
        setSuccess(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    Api.get("employmentEpySuc/" + Userid)
      .then(response => {
        setSuccess(response.data)
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
          {getsuccess.map((getsucc, index) => {
            return (
              <Card key={index}>
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
                    <Button style={styles.butt} onPress={() => navigation.navigate('empreview', {
                                    emm_id: getsucc.emm_id,
                                })} >
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

      </ScrollView>
    </SafeAreaView>
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


