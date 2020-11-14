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
        return super.send({ uri: super.getURI({ key: 'member', subKey: 'create' }), data: data, isToken: false });
    }

    /**
     * @description signin member
     * @name signin
     * @method POST
     * @param {String} email
     * @param {String} password
     */

    static Signin(data) {
        return super.send({ uri: super.getURI({ key: 'auth', subKey: 'login' }), data: data, isToken: false });
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

    static GetProfile(data) {
        return super.send({ uri: super.getURI({ key: 'member', subKey: 'getprofile' }), data: data, });
    }


    /**
     * @description CheckUserName 
     * @name CheckUserName
     * @param {String} username
     */

    static CheckUserName(data) {
        return super.send({ uri: super.getURI({ key: 'member', subKey: 'checkusername' }), data: data, isToken: false });
    }

    /**
     * @description CheckMobilePhoneNumber 
     * @name CheckMobilePhoneNumber
     * @param {String} countryCode
     * @param {String} mobilePhone
     */
    
    static CheckMobilePhoneNumber(data) {
        return super.send({ uri: super.getURI({ key: 'member', subKey: 'checkmobilephonenumber' }), data: data, isToken: false });
    }

    /**
     * @description Checkifexists 
     * @name Checkifexists
     * @param {String} value
     * @param {String} type 1 - Mail, 2 - userName
     */
    
    static Checkifexists(data) {
        return super.send({ uri: super.getURI({ key: 'member', subKey: 'checkifexists' }), data: data, isToken: false });
    }

}