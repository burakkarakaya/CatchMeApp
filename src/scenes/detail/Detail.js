import React from 'react';
import { Profile } from '_subview';

const Detail = ({ route }) => {
    const { type, data } = route.params || {};

    switch (type) {
        case 'profile':
            const { memberId } = data;
            return <Profile id={memberId} />;

        default:
            return null;
    }
}

export { Detail };