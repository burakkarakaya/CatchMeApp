import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { images } from '_assets';
import { signupForm } from '_config';
import Form from '_form/Form';
import { Translation } from '_context';

const Signup = () => {
    const t = Translation('login'),
        _config = signupForm();

    return (
        <React.Fragment>
            <Image source={images.logo} />
            <Form config={_config} />
        </React.Fragment>
    );
}

export { Signup };