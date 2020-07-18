import { BaseService } from './base';

/**
 * @namespace FeedApi
*/

/**
 * @class CommentApi
 */

export default class CommentService extends BaseService {

    /** 
     * @description signin member
     * @name get
     * @method POST
     * @param {String} page
     * @param {String} contentId      
    */

    static Get(data) {
        return super.send({ uri: super.getURI({ key: 'comments', subKey: 'get'  }), data: data });
    }
}