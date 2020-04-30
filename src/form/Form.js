import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { TextField } from './components';
import { signinForm } from '../config';

export default function Form() {
    const fields = {};
    fields[0] = React.useRef();
    fields[1] = React.useRef();
    fields[2] = React.useRef();

    const _onPress = () => {
        console.warn(fields[0].current.printFirstName());
        console.warn(fields[1].current.printFirstName());
        console.warn(fields[2].current.printFirstName());
    }

    console.warn(signinForm());

    return (
        <View style={{ flex: 1, backgroundColor: 'red', paddingTop: 50 }}>
            <TextField ref={fields[0]} />
            <TextField ref={fields[1]} />
            <TextField ref={fields[2]} />

            <TouchableOpacity onPress={_onPress}>
                <Text>KAYDET</Text>
            </TouchableOpacity>
        </View>
    );
};