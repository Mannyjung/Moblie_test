import React from 'react'
import { Text,View } from 'react-native'
import CardList from './CardList'
import { Data } from '../carou/data'
const CardMain = () => {
    return (
        <>
        <View>
              <CardList key="cardlist" data={Data}/>
        </View>
          
        </>
    )
}

export default CardMain
