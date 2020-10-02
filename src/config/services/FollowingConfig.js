import React from 'react';
import { Following } from '_subview/subItem/Following';
import { Followers } from '_subview/subItem/Followers';
import { Duelling } from '_subview/subItem/Duelling';

export const FollowingConfig = {

    getfollowings: {
        api: {
            type: 'FollowingService', // servis tipi
            func: 'GetFollowings', // ilgili servis tipinde kullanacağımız fonk.
            keys: 'followings',
            param: { page: 1 }
        },
        renderItem: Following
    },

    getfollowers: {
        api: {
            type: 'FollowingService', // servis tipi
            func: 'GetFollowers', // ilgili servis tipinde kullanacağımız fonk.
            keys: 'followers',
            param: { page: 1 }
        },
        renderItem: Followers
    },


    getDueLed: {
        api: {
            type: 'DuelistService', // servis tipi
            func: 'GetDueList', // ilgili servis tipinde kullanacağımız fonk.
            keys: 'duelists',
            param: { page: 1 }
        },
        renderItem: Duelling
    }

};