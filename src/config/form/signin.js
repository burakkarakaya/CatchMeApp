import { Translation } from '../../context';

export const signinForm = () => { 
    const t = Translation('login');
    return {
        fields: [
            {
                id: 'email',
                type: 'text',
                title: t('signin.email'),
                placeholder: t('signin.writeEmail'),
            },
            {
                id: 'password',
                type: 'text',
                title: t('signin.password'),
                placeholder: t('signin.enterPassword')
            }
        ]
    };
};