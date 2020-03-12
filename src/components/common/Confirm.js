import React, { Component } from 'react';
import { Text, View, Modal } from 'react-native';
import { CardSection } from './CardSection';
import { Button } from './Button';

const Confirm = ({ children, yesPress, noPress, visible }) => {
    const {containerStyle, textStyle, cardSectionStyle } = styles

    return (
        <Modal
            visible={visible}
            transparent
            animationType="slide"
            onRequestClose={() => { }}

        >
            <View style = {containerStyle}>
                <CardSection style = {cardSectionStyle}>
                    <Text style = {textStyle}>{children}</Text>
                </CardSection>
                <CardSection>
                    <Button onPress={yesPress}>Yes</Button>
                    <Button onPress={noPress}>No</Button>
                </CardSection>
            </View>

        </Modal>
    );

}

const styles = {
    cardSectionStyle: {
        justifyContent:'center'

    },
    textStyle:{
        flex: 1,
        fontSize: 18,
        textAlign: 'center',
        lineHeight: 40

    },
    containerStyle:{
        flex: 1,
        position: 'relative',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        justifyContent: 'center'
    }
}

export { Confirm };