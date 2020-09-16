import { BaseService } from './base';

/**
 * @namespace FollowingApi
*/

/**
 * @class FollowingApi
 */

export default class FollowingService extends BaseService {
    /**
     * @description GetFollowings 
     * @name GetFollowings
     * @param {String} memberId
     * @param {String} page
     */
    
    static GetFollowings( data ) { 
        return super.send({ uri: super.getURI({ key: 'following', subKey: 'getfollowings' }), data: data, });
    }

    /**
     * @description GetFollowers 
     * @name GetFollowers
     * @param {String} memberId
     * @param {String} page
     */
    
    static GetFollowers( data ) {
        return super.send({ uri: super.getURI({ key: 'following', subKey: 'getfollowers' }), data: data, });
    }

    /**
     * @description UnFollow 
     * @name UnFollow
     * @param {String} id
     */
    
    static UnFollow( data ) { 
        return super.send({ uri: super.getURI({ key: 'following', subKey: 'unfollow' }), data: data, });
    }

    /**
     * @description Follow 
     * @name Follow
     * @param {String} id
     */
    
    static Follow( data ) { 
        return super.send({ uri: super.getURI({ key: 'following', subKey: 'follow' }), data: data, });
    }
}
