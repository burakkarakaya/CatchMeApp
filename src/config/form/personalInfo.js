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

export const personalInfoForm = () => {
    const t = Translation('login');
    return {
        styles: styles.login,
        fields: [


            {
                id: 'userName',
                type: 'text',
                title: t('personalInfo.userName'),
                validation: [{ key: "isEmpty" }, { key: "isMin", rule: "3" }],
                defValue: 'vurucuTim58',
                props: {
                    placeholder: t('personalInfo.enterYourUserName'),
                }
            },

            {
                id: 'firstName',
                type: 'text',
                title: t('personalInfo.firstName'),
                validation: [{ key: "isEmpty" }, { key: "isMin", rule: "2" }],
                defValue: 'burak',
                props: {
                    placeholder: t('personalInfo.enterYourFirstName'),
                    autoCompleteType: 'name',
                    textContentType: 'givenName',
                }
            },

            {
                id: 'lastName',
                type: 'text',
                title: t('personalInfo.lastName'),
                validation: [{ key: "isEmpty" }, { key: "isMin", rule: "2" }],
                defValue: 'karakaya',
                props: {
                    placeholder: t('personalInfo.enterYourLastName'),
                    autoCompleteType: 'name',
                    textContentType: 'familyName',
                }
            },

            {
                id: 'gender',
                type: 'dropDown',
                title: t('personalInfo.gender'),
                validation: [{ key: "isEmpty" }],
                items: [
                    { label: t('personalInfo.woman'), value: "2" },
                    { label: t('personalInfo.man'), value: "1" },
                    { label: t('personalInfo.other'), value: "0" }
                ],
                props: {
                    placeholder: t('personalInfo.chooseYourGender'),
                }
            },

            {
                id: 'birthday',
                type: 'dateTimePicker',
                title: t('personalInfo.birthday'),
                validation: [{ key: "isEmpty" }],
                props: {
                    placeholder: t('personalInfo.enterYourBirthday'),
                }
            },


            {
                type: 'validationButton',
                title: t('personalInfo.done'),
                props: {
                    data: { type: 'complate' },
                    type: 'solidLarge',
                    style: { wrapper: { marginTop: 19, alignSelf: 'center', width: '100%' } }
                }
            }


        ]
    };
};