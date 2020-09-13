import { BaseService } from './base';

/**
 * @namespace LikingApi
*/

/**
 * @class LikingApi
 */

export default class LikingService extends BaseService {

    /** 
     * @description Like
     * @name Like
     * @method POST
     * @param {String} contentId
    */

    static Like(data) {
        return super.send({ uri: super.getURI({ key: 'liking', subKey: 'like' }), data: data });
    }

    /** 
     * @description UnLike
     * @name UnLike
     * @method POST
     * @param {String} contentId
    */

    static UnLike(data) {
        return super.send({ uri: super.getURI({ key: 'liking', subKey: 'unlike' }), data: data });
    }
}