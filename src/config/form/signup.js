import { Translation } from '../../context';

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
        fields: [
            {
                id: 'email',
                type: 'text',
                title: t('signup.email'),
                validation: [{ key: "isEmpty" }, { key: "isMail" }],
                props: {
                    placeholder: t('signup.writeEmail'),
                }
            },
            {
                id: 'fullname',
                type: 'text',
                title: t('signup.fullName'),
                validation: [{ key: "isEmpty" }, { key: "isTwo", rule: { first: 2, last: 2 } }],
                props: {
                    placeholder: t('signup.writeFullName'),
                }
            },
            {
                id: 'username',
                type: 'text',
                title: t('signup.username'),
                validation: [{ key: "isEmpty" }],
                props: {
                    placeholder: t('signup.writeUsername'),
                }
            },
            {
                id: 'password',
                type: 'text',
                title: t('signup.password'),
                validation: [{ key: "isEmpty" }, { key: "isPassword" }],
                props: {
                    placeholder: t('signup.enterPassword')
                }
            }
        ]
    };
};