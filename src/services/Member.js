import { BaseService } from './base';

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
        return super.send({ uri: super.getURI({ key: 'member', subKey: 'create'  }), data: data, isToken: false });
    }

    /**
     * @description signin member
     * @name signin
     * @method POST
     * @param {String} email
     * @param {String} password
     */

    static Signin(data) {
        return super.send({ uri: super.getURI({ key: 'auth', subKey: 'login'  }), data: data, isToken: false });
    }

     /**
     * @description get member
     * @name get
     */

    static Get() {
        return super.send({ uri: super.getURI({ key: 'member', subKey: 'get' }), method: 'GET' });
    }

    /**
     * @description getprofile member
     * @name getprofile
     */

    static GetProfile( data ) {
        return super.send({ uri: super.getURI({ key: 'member', subKey: 'getprofile' }), data: { "memberId": 53 }, });
    }
}