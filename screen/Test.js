import React, {useState} from 'react';
import {SafeAreaView, View, StyleSheet, FlatList, Text} from 'react-native';
import ListMyWork from '../component/ListMyWork';
import { Data } from '../component/carou/data';


const Test = () => {
  const [lists, setLists] = useState(Data);

  const deleteItem = (index) => {
    const arr = [...lists];
    arr.splice(index, 1);
    setLists(arr);
  };
  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={lists}
        renderItem={({item, index}) => {
          return <ListMyWork data={item} handleDelete={() => deleteItem(index)} />;
        }}
        ItemSeparatorComponent={() => {
          return <View style={styles.seperatorLine}></View>;
        }}
      />
    </SafeAreaView>
  );
};

export default Test;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  seperatorLine: {
    height: 1,
    backgroundColor: 'black',
  },
});