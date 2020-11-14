import { BaseService } from './base';

/**
 * @namespace CommunicationApi
*/

/**
 * @class CommunicationApi
 */

export default class CommunicationService extends BaseService {

    /** 
     * @description signin member
     * @name get
     * @method POST
     * @param {String} textTemplateType
     * @param {String} validationCode     
     * @param {String} culture   
    */
    static Sendsms(data) {
        return super.send({ uri: super.getURI({ key: 'communication', subKey: 'sendsms' }), data: data });
    }
}