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
     * @name signup
     * @method POST
     * @param {String} firstName
     * @param {String} lastName
     * @param {String} username
     * @param {String} email
     * @param {String} password
     * @param {String} gender
     */

    static Signup(data) {
        return super.Post(super.baseUrl + super.url.member.create, data);
    }

    /**
     * @description signin member
     * @name signin
     * @method POST
     * @param {String} email
     * @param {String} password
     */

    static Signin(data) {
        return super.Post(super.baseUrl + super.url.auth.login, data);
    }
}