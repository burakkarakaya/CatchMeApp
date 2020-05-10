export default {
    auth: {
        login: '/api/auth/login'
    },
    content: {
        get: '/api/contents/get',
        delete: '/api/contents/delete',
        create: '/api/contents/create',
        update: '/api/contents/update',
    },
    dueling: {
        get: '/api/duelings/get',
        delete: '/api/duelings/delete',
        create: '/api/duelings/create'
    },
    duelingRequest: {
        get: '/api/dueling-requests/get',
        delete: '/api/dueling-requests/delete',
        create: '/api/dueling-requests/create'
    },
    following: {
        get: '/api/followings/get',
        delete: '/api/followings/delete',
        gecreatet: '/api/followings/create'
    },
    liking: {
        get: '/api/likings/get',
        delete: '/api/likings/delete',
        create: '/api/likings/create',
    },
    member: {
        get: '/api/members/get',
        create: '/api/members/create',
        update: '/api/members/update'
    }
};