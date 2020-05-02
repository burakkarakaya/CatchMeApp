import { Translation } from '../../context';

export const changeEmailForm = () => { 
    const t = Translation('profile');
    return {
        fields: [
            {
                id: 'email',
                type: 'text',
                title: t('changeEmail.email'),
                validation: [{ key: "isEmpty" }, { key: "isMail" }],
                props: {
                    placeholder: t('changeEmail.writeEmail'),
                }
            }
        ]
    };
};