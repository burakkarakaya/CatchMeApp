import { Translation } from '../../context';

export const changePassword = () => {
    const t = Translation('profile');
    return {
        fields: [
            {
                id: 'password',
                type: 'text',
                title: t('changePassword.password'),
                validation: [{ key: "isEmpty" }, { key: "isMin", rule: 6 }, { key: "isPassword" }],
                props: {
                    placeholder: t('changePassword.password'),
                }
            },
            {
                id: 'changePassword',
                type: 'text',
                title: t('changePassword.changePassword'),
                validation: [{ key: "isEmpty" },  { key: "isMin", rule: 6 }, { key: "isPassword" }],
                props: {
                    placeholder: t('changePassword.changePassword'),
                }
            },
            {
                id: 'passwordConfirmation',
                type: 'text',
                title: t('changePassword.passwordConfirmation'),
                validation: [{ key: "isEmpty" },  { key: "isMin", rule: 6 }, { key: "isPassword" }, { key: "isEqual", rule: "changePassword" }],
                props: {
                    placeholder: t('changePassword.passwordConfirmation'),
                }
            },

        ]
    };
};