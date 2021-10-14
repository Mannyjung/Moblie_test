import React, { useEffect, useState } from 'react'
import { View } from 'react-native'
import Api from '../../api/Api'
import Carousel from './Carousel'

const Carouselmained = ({id}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        NewApi()
    }, [id]);
    console.log(id)
    const NewApi = async () => {
        await Api.get('PIC/' + id)
            .then(response => {
                setData(response.data)
            })
    }
    return (

            <View>
                <Carousel key="carousel" data={data} />
            </View>

    )
}

export default Carouselmained