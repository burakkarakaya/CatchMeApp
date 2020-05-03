import { Translation } from '../../context';
import * as styles from '../styles';

export const forgotPasswordForm = () => { 
    const t = Translation('login');
    return {
        styles: styles.login,
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