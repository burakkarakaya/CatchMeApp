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
import { Button } from '_UI';
import * as styles from './styles';
import Container from './Container';
import { KeyboardAvoidingComponent } from '_components';

const Main = () => {
    const t = Translation('login'),
        _config = signupForm(),
        _onPress = ({ type = '' }) => {
            switch (type) {
                case 'registerWith':
                    console.warn('registerWith');
                    break;
                default:
                    break;
            }
        };

    return (

        <Container>
            <KeyboardAvoidingComponent>
                <View style={{ flex: 1, justifyContent: 'space-between' }}>
                    <View>
                        <Image
                            style={styles.login.logo}
                            source={images.logo}
                        />
                        <Text style={styles.login.hello}>{t('signup.registering')}</Text>
                        <Form onPress={_onPress} config={_config} />
                    </View>

                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={styles.login.newTo}>{t('signup.dataPolicy')}</Text>
                        </View>
                    </View>

                </View>
            </KeyboardAvoidingComponent>
        </Container>

    );
}

const Signup = React.memo(Main);

export { Signup };