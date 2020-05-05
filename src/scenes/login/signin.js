import React from 'react';
import {
    View,
    Image,
    Text,
} from 'react-native';
import { images } from '_assets';
import { signinForm } from '_config';
import Form from '_form/Form';
import { Translation } from '_context';
import Container from './Container';

const Main = () => {
    const t = Translation('login'),
        _config = signinForm();

    return (
        <Container>
            <React.Fragment>
                <Image source={images.logo} />
                <Text>{t('signin.hello')}</Text>
                <Text>{t('signin.enterInformation')}</Text>
                <Form config={_config} />
            </React.Fragment>
        </Container>
    );
}

const Signin = React.memo(Main);

export { Signin };