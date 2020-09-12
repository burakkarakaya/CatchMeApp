import { Translation } from '../../context';
import * as styles from '../styles';

export const signinForm = () => {
    const t = Translation('login');
    return {
        styles: styles.login,

        fields: [
            {
                id: 'email',
                type: 'text',
                title: t('signin.email'),
                validation: [{ key: "isEmpty" }, { key: "isMail" }],
                defValue: 'yasin@runarchy.org',
                props: {
                    placeholder: t('signin.writeEmail'),
                    autoCompleteType: 'email',
                    textContentType: 'emailAddress',
                    keyboardType: 'email-address'
                }
            },
            {
                id: 'password',
                type: 'text',
                title: t('signin.password'),
                validation: [{ key: "isEmpty" }, { key: "isMin", rule: 6 }, { key: "isPassword" }],
                defValue: 'tS!e3yUS$hX',
                props: {
                    placeholder: t('signin.enterPassword'),
                    textContentType: 'newPassword',
                    autoCompleteType: 'password',
                    secureTextEntry: true
                }
            },
            {
                type: 'button',
                title: t('signin.forgetPassword'),
                props: {
                    data: { type: 'forgetPassword' },
                    type: 'underline',
                    style: { wrapper: { marginTop: 18, marginBottom: 30 }, text: { fontSize: 14, color: '#C4C4C4' } }
                }
            },
            {
                type: 'validationButton',
                title: t('signin.signin'),
                props: {
                    data: { type: 'signin' },
                    type: 'solidLarge',
                    style: { wrapper: { marginBottom: 30, alignSelf: 'center', width: '100%' } }
                }
            }
        ]
    };
};
