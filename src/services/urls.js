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
    duelingSession: {
        getduelingsessions: '/api/duelingsession/getduelingsessions',
        getduelingcontents: '/api/duelingsession/getduelingcontents',
        createduelingsession: '/api/duelingsession/createduelingsession'
    },
    dueList: {
        createduelistrequest: '/api/duelist/createduelistrequest',
        deleteduelistrequest: '/api/duelist/deleteduelistrequest',
        getduelistrequest: '/api/duelist/getduelistrequest',
        confirmduelistrequest: '/api/duelist/confirmduelistrequest',
        getduelist: '/api/duelist/getduelist'
    },
    feeds: {
        get: '/api/feeds/get',
    },
    following: {
        get: '/api/followings/get',
        delete: '/api/followings/delete',
        gecreatet: '/api/followings/create',
        
        getfollowings: '/api/followings/getfollowings',
        getfollowers: '/api/followings/getfollowers',
        unfollow: '/api/followings/unfollow',
        follow: '/api/followings/follow',
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
        update: '/api/members/update',
        checkusername: '/api/members/checkusername'
    }
};