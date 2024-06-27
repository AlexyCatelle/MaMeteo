import React from "react";
import { SafeAreaView, StyleSheet, TextInput } from 'react-native';


export default function Search() {

    const [city, onChangeText] = React.useState('Selectionner votre ville')

    return (
    
            <TextInput
                style={styles.input}
                value={city}
                onChangeText={onChangeText}
            />
    );
};

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 60,
        borderWidth: 1,
        padding: 10,
    },
});
