import { Translation } from '../../context';

export const forgotPasswordForm = () => { 
    const t = Translation('login');
    return {
        fields: [
            {
                id: 'email',
                type: 'text',
                title: t('forgotPassword.email'),
                validation: [{ key: "isEmpty" }, { key: "isMail" }],
                props: {
                    placeholder: t('forgotPassword.writeEmail'),
                }
            }
        ]
    };
};