import React from 'react';
import {
  Image, View, Text, StyleSheet, Dimensions, Animated, TouchableOpacity,
} from 'react-native';
import { Card, CardItem, Body } from "native-base";
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import { Actions } from 'react-native-router-flux';
const { width, height } = Dimensions.get('screen');

const ListMyWork = ({ data }) => {

  const leftSwipe = (progress, dragX) => {
    const scale = dragX.interpolate({
      inputRange: [0, 100],
      outputRange: [2, 0],
      extrapolate: 'clamp',
    });


    return (

      <>
        <TouchableOpacity activeOpacity={0.6} onPress={() => Actions.editwork()}>
          <View style={styles.editBox} >
            <Animated.Text style={{ transform: [{ scale: scale }] }} >
              <View >
                <MaterialCommunityIcons name="circle-edit-outline" size={24} color="white" />
              </View>
            </Animated.Text>
            <Animated.Text style={{ transform: [{ scale: scale }] }}>
              <View >
                <Text style={styles.text} >
                  แก้ไข
                </Text>
              </View>
            </Animated.Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => Actions.editpack()}>
          <View style={styles.packBox}>
            <Animated.Text style={{ transform: [{ scale: scale }] }}>
              <View >
                <MaterialCommunityIcons name="package-variant" size={24} color="white" />
              </View>
            </Animated.Text>
            <Animated.Text style={{ transform: [{ scale: scale }] }}>
              <View >
                <Text style={styles.text}>
                  แพ็คเกจ
                </Text>
              </View>
            </Animated.Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.6} onPress={() => Actions.editpic()}>
          <View style={styles.picBox}>
            <Animated.Text style={{ transform: [{ scale: scale }] }}>
              <View >
                <AntDesign name="picture" size={24} color="white" />
              </View>
            </Animated.Text>
            <Animated.Text style={{ transform: [{ scale: scale }] }}>
              <View >
                <Text style={styles.text}>
                  รูปภาพ
                </Text>
              </View>
            </Animated.Text>
          </View>
        </TouchableOpacity>
      </>

    );
  };
  return (
    <Swipeable renderRightActions={leftSwipe}>
      <View style={styles.container} key={data.aw_id}>
        <Card transparent >
          <CardItem style={styles.CardItem}>
            <Image
              source={{ uri: data.w_img_name }}
              style={styles.image}
            />
            <Body style={styles.body}>
              <Text style={styles.textTitle}>
                {data.aw_name}
              </Text>
              <Text style={styles.textDes}>
                {/* {data.aw_detail} */}
              </Text>
            </Body>
          </CardItem>
        </Card>
      </View>
    </Swipeable>
  );
};

export default ListMyWork;

const styles = StyleSheet.create({
  containerBox: {
    width: 150,
    marginTop: 20,

  },
  editBox: {
    marginTop: 20,
    backgroundColor: '#808080',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: height / 7,
  },
  packBox: {
    marginTop: 20,
    backgroundColor: '#FF9999',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: height / 7,
  },
  picBox: {
    marginTop: 20,
    backgroundColor: '#FFB260',
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: height / 7,
  },
  image: {
    width: 150,
    height: 130,
    borderRadius: 10,
    marginTop: -20,
    marginLeft: -10,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
    backgroundColor: '#fff'
  }
  ,
  heades: {
    paddingRight: 8,
    paddingLeft: 8
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
  }
  ,
  body: {
    marginLeft: 10,

  }
  ,
  textTitle: {
    textShadowColor: '#4E4E4E',
    textShadowOffset: { width: -1, height: 0.5 },
    //textShadowRadius: 5,
    fontSize: 16,
    color: '#000'
  },
  textDes: {
    textShadowColor: '#4E4E4E',
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
    paddingTop: 5,
    fontSize: 15,
    color: '#000'
  },
  text: {
    fontSize: 15,
    color: '#fff',
  },
});