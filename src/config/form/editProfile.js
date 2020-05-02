import { Translation } from '../../context';

export const editProfileForm = () => {
    const t = Translation('profile');
    return {
        fields: [
            {
                id: 'fullName',
                type: 'text',
                title: t('editProfile.fullName'),
                validation: [{ key: "isEmpty" }, { key: "isTwo", rule: { first: 2, last: 2 } }],
                props: {
                    placeholder: t('editProfile.fullName'),
                }
            },
            {
                id: 'userName',
                type: 'text',
                title: t('editProfile.userName'),
                validation: [{ key: "isEmpty" }],
                props: {
                    placeholder: t('editProfile.userName'),
                }
            },
            {
                id: 'caption',
                type: 'text',
                title: t('editProfile.caption'),
                validation: [{ key: "isEmpty" }],
                props: {
                    placeholder: t('editProfile.caption'),
                }
            },
            {
                id: 'email',
                type: 'text',
                title: t('editProfile.email'),
                validation: [{ key: "isEmpty" }, { key: "isMail" }],
                props: {
                    placeholder: t('editProfile.email'),
                }
            },
            {
                id: 'phoneNumber',
                type: 'text',
                title: t('editProfile.phoneNumber'),
                validation: [{ key: "isEmpty" }],
                props: {
                    placeholder: t('editProfile.phoneNumber'),
                }
            },
            {
                id: 'gender',
                type: 'text',
                title: t('editProfile.gender'),
                validation: [{ key: "isEmpty" }],
                props: {
                    placeholder: t('editProfile.gender'),
                }
            }
        ]
    };
};