import React from 'react';

export const get = {
    api: {
        type: 'MemberService', // servis tipi
        func: 'Get', // ilgili servis tipinde kullanacağımız fonk.
        keys: 'member',
    }
};

export const getProfile = {
    api: {
        type: 'MemberService', // servis tipi
        func: 'GetProfile', // ilgili servis tipinde kullanacağımız fonk.
        keys: 'member',
    }
};