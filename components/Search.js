import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';

export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            city: 'Useless Text',
        };
    };
    setCity = (city) => {
        this.setState({ city });
    };

    render() {
        return (
            <SafeAreaView>
                <TextInput
                    style={styles.input}
                    value={this.state.city}
                    onChangeText={this.state.city}
                />
            </SafeAreaView>
        );
    };
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
