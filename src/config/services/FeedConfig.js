import React from 'react';
import { FeedItem } from '_subview';

/*
    3 tip var

    forYou
    recent
    following
*/

export const forYou = {
    api: {
        type: 'FeedService', // servis tipi
        func: 'Get', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, feedType: 'forYou' },
        keys: 'feeds',
    },
    renderItem: FeedItem
};

export const recent = {
    api: {
        type: 'FeedService', // servis tipi
        func: 'Get', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, feedType: 'recent' },
        keys: 'feeds',
    },
    renderItem: FeedItem
};

export const following = {
    api: {
        type: 'FeedService', // servis tipi
        func: 'Get', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, feedType: 'following' },
        keys: 'feeds',
    },
    renderItem: FeedItem
};