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
import { MemberService } from '_services';
import * as styles from './styles';
import Container from './Container';

const Main = () => {
    const t = Translation('login'),
        _config = signupForm(),
        _callback = async (formData) => {
            try {
                const data = await MemberService.Create(formData);
                console.warn('asdasdasd', data);
                if (!data.success) throw new Error(data.message);
                console.warn(data);
                return true;
            } catch (error) {
                console.warn('error', error.message);
                return new Error(error.message);
            }
        },
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
            <View style={{ flex: 1, paddingTop: 36, justifyContent: 'space-between' }}>
                <View>
                    <Image
                        style={styles.login.logo}
                        source={images.logo}
                    />
                    <Text style={styles.login.hello}>{t('signup.registering')}</Text>
                    <Form callback={_callback} onPress={_onPress} config={_config} />
                </View>

                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.login.newTo}>{t('signup.dataPolicy')}</Text>
                    </View>
                </View>

            </View>

        </Container>
    );
}

const Signup = React.memo(Main);

export { Signup };