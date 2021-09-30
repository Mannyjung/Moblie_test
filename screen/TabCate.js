import { Text,StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Container, Header, Tab, Tabs, ScrollableTab,DefaultTabBar} from 'native-base';
import CardList from '../component/Card/CardList';
import Api from '../api/Api'
const TabCate = () => {
    const [dataCate, setData] = useState([]);
    useEffect(() => {
        NewApi()
    }, []);
    //  console.log(dataCate)
    const NewApi = async () => {
        await Api.get('maincate')
            .then(response => {
                setData(response.data)

            })
    }
    const renderTabBar = (props) => {
        props.tabStyle = Object.create(props.tabStyle);
        return <DefaultTabBar {...props} />;
    };


    return (
        <>
            <Header  androidStatusBarColor="#ff5722" style={{ backgroundColor: '#ff5722' }} >
                <Text style={style.headder}>
                    หมวดหมู่
                </Text>
            </Header>
            <Tabs renderTabBar={renderTabBar} renderTabBar={() => <ScrollableTab style={{backgroundColor:'#0000', color:'#0000'}} />} >
                {dataCate.map((data) => {
                    return (
                        <Tab key={data.main_cate_id} heading={data.main_cate_name} tabStyle={{ backgroundColor: '#FFFFFF' }} textStyle={{ color: '#000000' }} activeTabStyle={{ backgroundColor: '#ff5722' }} activeTextStyle={{ color: '#ffff' }}>
                            <CardList id={data.main_cate_id} />
                        </Tab>
                    )
                })}
            </Tabs>
        </>
    )
}
const style = StyleSheet.create({
    headder :{
        paddingTop:15,
        fontSize:22,
        color:'#ffff'
    }
})

export default TabCate
