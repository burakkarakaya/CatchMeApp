import { Translation } from '../../context';
import * as styles from '../styles';
/* 
    {
        "firstName": "string",
        "lastName": "string",
        "username": "string",
        "email": "string",
        "password": "string",
        "gender": null
    }
*/

export const signupForm = () => {
    const t = Translation('login');
    return {
        styles: styles.login,
        fields: [
            {
                id: 'email',
                type: 'text',
                title: t('signup.email'),
                validation: [{ key: "isEmpty" }, { key: "isMail" }],
                defValue: 'burakkarakaya1984@gmail.com',
                props: {
                    placeholder: t('signup.writeEmail'),
                }
            },
            {
                id: 'firstName',
                type: 'text',
                title: t('signup.firstName'),
                validation: [{ key: "isEmpty" }],
                defValue: 'burak',
                props: {
                    placeholder: t('signup.writeFirstName'),
                }
            }, 
            {
                id: 'lastName',
                type: 'text',
                title: t('signup.lastName'),
                validation: [{ key: "isEmpty" }],
                defValue: 'karakaya',
                props: {
                    placeholder: t('signup.writeLastName'),
                }
            },
            {
                id: 'username',
                type: 'text',
                title: t('signup.username'),
                validation: [{ key: "isEmpty" }],
                defValue: 'burak',
                props: {
                    placeholder: t('signup.writeUsername'),
                }
            },
            {
                id: 'password',
                type: 'text',
                title: t('signup.password'),
                validation: [{ key: "isEmpty" }, { key: "isMin", rule: 6 }, { key: "isPassword" }],
                defValue: '111111',
                props: {
                    placeholder: t('signup.enterPassword')
                }
            },
            {
                type: 'validationButton',
                title: t('signup.register'),
                props: {
                    data: { type: 'signup' },
                    type: 'solidLarge',
                    style: { wrapper: { marginTop: 18, marginBottom: 17, alignSelf: 'center', width: '80%' } }
                }
            },
            {
                type: 'button',
                title: t('signup.registerWith'),
                props: {
                    data: { type: 'registerWith' },
                    type: 'rounded',
                    style: { wrapper: { alignSelf: 'center' } },
                    rightIco: 'facebookIco'
                }
            }
        ]
    };
};