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
                validation: [{ key: "isEmpty" }, { key: "isPassword" }],
                props: {
                    placeholder: t('signin.enterPassword')
                }
            }
        ]
    };
};