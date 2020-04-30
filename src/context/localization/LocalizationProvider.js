import React from 'react';
import { withTranslation } from 'react-i18next';
import './i18n';
import LocalizationContext from './LocalizationContext';

let LocalizationProvider = (props) => {
    const { t, i18n, children } = props;
    return (
        <LocalizationContext.Provider value={{ t, i18n }}>
            {children}
        </LocalizationContext.Provider>
    );
};

LocalizationProvider = withTranslation()(LocalizationProvider);

export { LocalizationProvider };