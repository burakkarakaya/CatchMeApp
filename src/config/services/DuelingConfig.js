import React from 'react';
import { TabItem } from '_subview/profile/TabItem';

export const getDuelings = {
    api: {
        type: 'DuelingsService', // servis tipi
        func: 'GetDuelingSessions', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, duelingType: 1 },
        keys: 'duelingMembers',
    },
    renderItem: TabItem
};

export const getDueled = {
    api: {
        type: 'DuelingsService', // servis tipi
        func: 'GetDuelingSessions', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, duelingType: 2 },
        keys: 'duelingMembers',
    },
    renderItem: TabItem
};