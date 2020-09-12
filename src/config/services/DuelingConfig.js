import React from 'react';
import { TabItem } from '_subview/profile/TabItem';

export const getDuelings = {
    api: {
        type: 'DuelingsService', // servis tipi
        func: 'GetDuelings', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, duelingType: 1 },
        keys: 'duelings',
    },
    renderItem: TabItem
};

export const getDueled = {
    api: {
        type: 'DuelingsService', // servis tipi
        func: 'GetDueled', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, duelingType: 2 },
        keys: 'duelings',
    },
    renderItem: TabItem
};