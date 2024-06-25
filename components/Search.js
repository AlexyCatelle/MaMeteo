import React from "react";
import { SafeAreaView, StyleSheet, TextInput, KeyboardFocusView } from 'react-native';

export default function Search() {

    const [city, onChangeText] = React.useState('Selectionner votre ville')

    return (
        <SafeAreaView>
            <TextInput
                style={styles.input}
                value={city}
                onChangeText={onChangeText}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 30,
        borderWidth: 1,
        padding: 10,
    },
});
