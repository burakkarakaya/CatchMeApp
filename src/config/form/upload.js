import { Translation } from '../../context';
import * as styles from '../styles';
import { Fonts } from '_styles';
/* 
    {
        "caption": "string",
        "keywords": "string",
    }
*/

export const uploadForm = () => {
    const t = Translation('upload');
    return {
        styles: {
            ...styles.login,
            textField: {
                
                input: {
                    height: 80,
                    paddingTop: 10,
                    paddingBottom: 10
                },
        
            }
        },
        fields: [
            {
                id: 'caption',
                type: 'text',
                title: t('caption'),
                //validation: [{ key: "isEmpty" }],
                props: {
                    placeholder: t('writeYourCaption'),
                    multiline: true
                }
            },

            {
                id: 'keywords',
                type: 'text',
                title: t('keywords'),
                //validation: [{ key: "isEmpty" }],
                props: {
                    placeholder: t('writeYourKeywords'),
                    multiline: true
                }
            },

        ]
    };
};