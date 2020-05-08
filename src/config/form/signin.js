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
                props: {
                    placeholder: t('signin.writeEmail'),
                }
            },
            {
                id: 'password',
                type: 'text',
                title: t('signin.password'),
                validation: [{ key: "isEmpty" }, { key: "isMin", rule: 6 }, { key: "isPassword" }],
                props: {
                    placeholder: t('signin.enterPassword')
                }
            },
            {
                type: 'button',
                title: t('signin.forgetPassword'),
                props: {
                    data: { type: 'forgetPassword' },
                    type: 'underline',
                    style: { wrapper: { marginTop: 10, marginBottom: 20, alignSelf: 'flex-end' } }
                }
            },
            {
                type: 'validationButton',
                title: t('signin.signin'),
                props: {
                    data: { type: 'signin' },
                    type: 'solidLarge',
                    style: { wrapper: { marginBottom: 30, alignSelf: 'center', width: '80%' } }
                }
            },
            {
                type: 'button',
                title: t('signin.loginWith'),
                props: {
                    data: { type: 'loginWith' },
                    type: 'rounded',
                    style: { wrapper: { alignSelf: 'center' } }
                }
            }
        ]
    };
};
