import React,{useEffect,useState} from 'react'
import { Text,Image,StyleSheet , ScrollView}  from 'react-native'
import { Card, Col, Item, Input, Container, Header, Content, CardItem, Body} from 'native-base';
//import Icon from 'react-native-vector-icons/FontAwesome';
import Carouselmained from '../component/carou/Carouselmained';
import CardMain from '../component/Card/CardMain';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Main = ({navigation}) => {
    const [data, setdata] = useState({
        Image: "",
    })
    useEffect(() => {
        onLoad()

    }, []);
    const onLoad = async () => {
        const image = await AsyncStorage.getItem('image');
        setdata({ ...data, Image: image })
    }
    return (
        <>

            <Container style={{ fontFamily: 'Kanit-Regular', backgroundColor: '#eeeeee' }} >
                <Header androidStatusBarColor="#ff5722" searchBar rounded style={{ backgroundColor: '#ff5722' }}>

                    <Col style={styles.boxSearch}>

                        <Item style={styles.search} >
                         
                            <Input placeholder="Flashwork" disabled />
                            <Image
                                source={{ uri: data.Image ? data.Image : null }}
                                style={styles.logo}
                            />
                        </Item>

                    </Col>
                </Header>
                <Content>
                {/* import Carouselmained from '../component/carou/Carouselmained'; */}
                    {/* <Carouselmained key='carou'/> */}
                
                    <ScrollView
                        style={{ flex: 1 }}
                        contentContainerStyle={{ flexGlow: 1 }}
                        scrollEnabled={true}
                    >
                        <Content style={styles.heades}>
                            <Card transparent>
                                <CardItem style={styles.headCard}>
                                    <Body >
                                        <Text style={{ color: '#ff5722', fontSize: 20 }}>
                                            ??????????????????????????????
                                        </Text>
                                    </Body>
                                </CardItem>
                            </Card>
                        </Content>
                        {/* import CardMain from '../component/Card/CardMain'; */}
                        <CardMain key='cardmain' navigation={navigation}/>
                        
                    </ScrollView>
                </Content>
            </Container>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start' // if you want to fill rows left to right
    },
    item: {
        padding: 5,
        width: '50%'// is 50% of container width
    },
    logo: {
        width: 40,
        height: 40,
        borderWidth: 2.5,
        borderColor: "#FFFFFF",
        borderRadius: 150,
        // marginTop: -15,
        marginRight: -55

    },

    touch: {
        marginTop: -15,
        marginRight: -55
    },
    search: {
        padding: 10,
        borderRadius: 10,
        marginBottom: 3,
        flex: 0.8,
        marginRight: 50
    },
    icon: {
        marginRight: -45
    },
    boxSearch: {
        paddingBottom: 5,
        flex: 1,
        height: 50,
        top: 9
    },
    imageIconStyle: {
        zIndex: 1,
        bottom: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'orange',
        width: 80,
        height: 80,
        borderWidth: 4,
        borderColor: "#FFFFFF",
        borderRadius: 150
    }
    ,
    heades: {
        paddingRight: 8,
        paddingLeft: 8
    },
    headCard: {
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0.5, height: 0.5 },
        shadowOpacity: 0.5,
        shadowRadius: 3,
        elevation: 5,
        backgroundColor: '#595959'
    }
});


export default Main
