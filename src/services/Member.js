import BaseService from './base';

/**
 * @namespace MemberApi
*/

/**
 * @class MemberApi
 */

export default class MemberService extends BaseService {
    /**
     * @description create member
     * @name create
     * @method POST
     * @param {String} firstName
     * @param {String} lastName
     * @param {String} username
     * @param {String} email
     * @param {String} password
     * @param {String} gender
     */
    
    static Create(data) {
        return super.Post(super.url.member.create, data);
    }
}