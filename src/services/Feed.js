import { BaseService } from './base';

/**
 * @namespace FeedApi
*/

/**
 * @class FeedApi
 */

export default class FeedService extends BaseService {

    /** 
     * @description signin member
     * @name get
     * @method POST
     * @param {String} page
     * @param {String} feedType      
    */

    static Get(data) {
        return super.send({ uri: super.getURI({ key: 'feeds', subKey: 'get'  }), data: data });
    }
}