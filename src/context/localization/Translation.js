import React from 'react';
import { useTranslation } from 'react-i18next';

function Translation(key) {
    const { t } = useTranslation(key);
    return t;
}

export { Translation };