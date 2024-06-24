import React from "react";
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';

export default class About extends React.Component {

    render() {
        return (
            <View style={style.view}>
                <Text style={style.title}> A propos de moi</Text>
                <Text>1989 era Selena Gomez you need to calm down artist twang Target Exclusive Nashville cottagecore critics Lover Fest Woulda Shoulda Coulda bonus live Grammy Selena Gomez All Too Well piano back catalogue tracklist Blank Space snake I knew you were trouble stadium karma is a cat album evermore I knew you were trouble era Speak Now</Text>
                <ActivityIndicator style={style.view} color="FF0000" size="large" animating={true} />
            </View>
        )
    };
};

const style = StyleSheet.create({
    view: {
        margin: 20,
    },
    title: {
        fontSize: 22,
        marginBottom: 20,
    }
})