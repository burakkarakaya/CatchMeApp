export default {
    auth: {
        login: '/api/auth/login'
    },
    comments: {
        get: '/api/comments/get',
        delete: '/api/comments/delete',
        create: '/api/comments/create',
    },
    content: {
        get: '/api/contents/get',
        delete: '/api/contents/delete',
        create: '/api/contents/create',
        update: '/api/contents/update',
    },
    dueling: {
        get: '/api/duelings/get',
        getduelings: '/api/duelings/getduelings',
        delete: '/api/duelings/delete',
        create: '/api/duelings/create'
    },
    duelingRequest: {
        get: '/api/dueling-requests/get',
        delete: '/api/dueling-requests/delete',
        create: '/api/dueling-requests/create'
    },
    feeds: {
        get: '/api/feeds/get',
    },
    following: {
        get: '/api/followings/get',
        delete: '/api/followings/delete',
        gecreatet: '/api/followings/create'
    },
    liking: {
        get: '/api/likings/get',
        unlike: '/api/likings/unlike',
        like: '/api/likings/like',
    },
    member: {
        get: '/api/members/get',
        getprofile: '/api/members/getprofile',
        create: '/api/members/create',
        update: '/api/members/update'
    }
};