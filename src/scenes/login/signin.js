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
import { Button } from '_UI';
import * as styles from './styles';
import Container from './Container';

const Main = () => {
    const t = Translation('login'),
        _config = signinForm(),
        _onPress = ({ type = '' }) => {
            switch (type) {
                case 'forgetPassword':
                    console.warn('forgetPassword');
                    break;
                case 'signin':
                    console.warn('signin');
                    break;
                case 'loginWith':
                    console.warn('loginWith');
                    break;
                case 'registerNow':
                    console.warn('registerNow');
                    break;
                default:
                    break;
            }
        };

    return (
        <Container>
            <View style={{ flex: 1, justifyContent: 'space-between' }}>
                <View>
                    <Image
                        style={styles.login.logo}
                        source={images.logo}
                    />
                    <Text style={styles.login.hello}>{t('signin.hello')}</Text>
                    <Text style={styles.login.enterInformation}>{t('signin.enterInformation')}</Text>
                    <Form onPress={_onPress} config={_config} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.login.newTo}>{t('signin.newTo')}</Text>

                        <Button type={'underlineBlue'} onPress={_onPress} data={{ type: 'registerNow' }}>{t('signin.registerNow')}</Button>
                    </View>
                </View>

            </View>

        </Container>
    );
}

const Signin = React.memo(Main);

export { Signin };