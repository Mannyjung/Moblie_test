import React from 'react'
import { Text, View } from 'react-native'
import {
    Content,
    Card,
    CardItem,
    Thumbnail,

    Left,
    Body,
    Right, Button, Title, List, ListItem, Header, Icon
} from 'native-base';
const Review = () => {
    return (
        <>
            <View>
                <Card transparent>
                    {/* <TextSemiBold style={{ fontSize: 20, fontStyle: 'normal' }}>
                                    รีวิว จากผู้ว่าจ้าง
                            </TextSemiBold > */}
                    <Card style={{ elevation: 3 }}>
                        <List>
                            <Left>
                                <Thumbnail source={{ uri: "https://i.pinimg.com/236x/e8/55/d4/e855d447720358bc71da3b38cd7ff950.jpg" }} />
                                <Body>
                                    <Text>ศิวกร รามเรือง</Text>
                                    <Text note>ทำงานไว</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Text>5.0</Text>
                                <Text note>2020-01-25</Text>
                            </Right>
                        </List>
                    </Card>
                    <Card style={{ elevation: 3 }}>
                        <List>
                            <Left>
                                <Thumbnail source={{ uri: "https://www.naewna.com/uploads/news/source/499127.jpg" }} />
                                <Body>
                                    <Text>ชวกรณ์ บัวแก้ว</Text>
                                    <Text note>งานแจ๋มมาเลยครับ</Text>
                                </Body>
                            </Left>
                            <Right>
                                <Text>4.8</Text>
                                <Text note>2020-01-25</Text>
                            </Right>
                        </List>
                    </Card>
                </Card>
            </View>
        </>
    )
}

export default Review
