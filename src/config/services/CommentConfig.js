import React from 'react';
import { Item } from '_subview/comment/Item';

export const CommentConfig = {
    api: {
        type: 'CommentService', // servis tipi
        func: 'Get', // ilgili servis tipinde kullanacağımız fonk.
        param: { page: 1, contentId: 0 },
        keys: 'comments',
    },
    renderItem: Item
};