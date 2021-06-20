import React, { useState, useEffect } from 'react'
import { Container, Header, Content, Form, Item, Picker } from 'native-base';
const Dropdow = (props) => {

    const initSubcate = {
        selected2: undefined
    };
    const [addsubcate, setAddSubcate] = useState(initSubcate);

    const onValueChange2 = (event) => {
        let { selected2, value } = event.target;

        setAddSubcate({ ...addsubcate, [selected2]: value })
    };

    return (
        <>
            <Container>
                <Header />
                <Content>
                    <Form>
                        <Item picker>
                            <Picker
                                mode="dropdown"
                                iosIcon={<Icon name="arrow-down" />}
                                style={{ width: undefined }}
                                placeholder="Select your SIM"
                                placeholderStyle={{ color: "#bfc6ea" }}
                                placeholderIconColor="#007aff"
                                selectedValue={initSubcate}
                                onValueChange={onValueChange2.bind(this)}
                            >
                                <Picker.Item label="Wallet" value="key0" />
                                <Picker.Item label="ATM Card" value="key1" />
                                <Picker.Item label="Debit Card" value="key2" />
                                <Picker.Item label="Credit Card" value="key3" />
                                <Picker.Item label="Net Banking" value="key4" />
                            </Picker>
                        </Item>
                    </Form>
                </Content>
            </Container>
        </>
    )
}

export default Dropdow
