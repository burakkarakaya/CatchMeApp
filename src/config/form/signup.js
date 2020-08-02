import { Translation } from '../../context';
import * as styles from '../styles';
import { Fonts } from '_styles';
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
                    autoCompleteType: 'email',
                    textContentType: 'emailAddress',
                    keyboardType: 'email-address'
                }
            },

            {
                id: 'phone',
                type: 'phone',
                title: t('signup.phoneNumber'),
                validation: [{ key: "isEmpty" }, { key: "isPhone", rule: "phone" }],
                defValue: '',
                props: {
                    placeholder: t('signup.writePhone'),
                    autoCompleteType: 'tel',
                    textContentType: 'telephoneNumber',
                    keyboardType: 'numeric'
                }
            },

            {
                id: 'password',
                type: 'text',
                title: t('signup.password'),
                validation: [{ key: "isEmpty" }, { key: "isMin", rule: 6 }, { key: "isPassword" }],
                defValue: '111111',
                props: {
                    placeholder: t('signup.enterPassword'),
                    textContentType: 'newPassword',
                    autoCompleteType: 'password',
                    secureTextEntry: true
                }
            },

            {
                id: 'termsAndConditions',
                type: 'info',
                title: t('signup.conditions'),
                props: {
                    data: { type: 'termsAndConditions' },
                    style: { wrapper: { marginTop: 30 }, text: { fontSize: 14, ...Fonts.medium } }
                }
            },


            {
                type: 'validationButton',
                title: t('signup.register'),
                props: {
                    data: { type: 'signup' },
                    type: 'solidLarge',
                    style: { wrapper: { marginTop: 19, alignSelf: 'center', width: '100%' } }
                }
            }


        ]
    };
};