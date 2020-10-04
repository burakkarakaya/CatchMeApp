import { Translation } from '_context';

export const UploadHeaderSettings = () => {

    const t = Translation('upload');
    
    return {
        video: [
            {
                title: t('video'),
                ico: 'videoActive',
                active: true
            },
            {
                type: 'dotted',
            },
            {
                title: t('duel'),
                ico: 'duelsPassive',
            },
            {
                type: 'dotted',
            },
            {
                title: t('caption'),
                ico: 'captionPassive',
            }
        ],

        duel: [
            {
                title: t('video'),
                ico: 'videoActive',
                active: true
            },
            {
                type: 'dotted',
                active: true
            },
            {
                title: t('duel'),
                ico: 'duelActive',
                active: true
            },
            {
                type: 'dotted',
            },
            {
                title: t('caption'),
                ico: 'captionPassive',
            }
        ],

        caption: [
            {
                title: t('video'),
                ico: 'videoActive',
                active: true
            },
            {
                type: 'dotted',
                active: true
            },
            {
                title: t('duel'),
                ico: 'duelActive',
                active: true
            },
            {
                type: 'dotted',
                active: true
            },
            {
                title: t('caption'),
                ico: 'captionActive',
                active: true
            }
        ]
    }

};