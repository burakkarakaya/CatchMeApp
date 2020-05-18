import { BaseService } from './base';

/**
 * @namespace ContentApi
*/

/**
 * @class ContentApi
 */

export default class ContentService extends BaseService {

    /**
     * @description get
     * @name get
     * @method POST
     * @param {Number} id
     */

    static Get(data) {
        return super.send({ uri: super.baseUrl + super.url.content.get, data: data });
    }
}