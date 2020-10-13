import React from 'react';
import {
    Request as RequestItem
} from '_subview';

export const RequestConfig = {
    api: {
        type: 'DuelistService', // servis tipi
        func: 'GetDuelistRequest', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, requestedByMe: false },
        keys: 'duelistRequests',
    },
    renderItem: RequestItem
};