import { BaseService } from './base';

/**
 * @namespace DuelistApi
*/

/**
 * @class DuelistApi
 */

export default class DuelistService extends BaseService {
    /**
     * @description CreateDuelistRequest
     * @name CreateDuelistRequest
     * @param {Number} requestedToMemberId 
     */

    static CreateDuelistRequest(data) {
        return super.send({ uri: super.getURI({ key: 'dueList', subKey: 'createduelistrequest' }), data: data });
    }

    /**
     * @description DeleteDuelistRequest
     * @name DeleteDuelistRequest
     * @param {Number} id 
     */

    static DeleteDuelistRequest(data) {
        return super.send({ uri: super.getURI({ key: 'dueList', subKey: 'deleteduelistrequest' }), data: data });
    }

    /**
     * @description GetDuelistRequest
     * @name GetDuelistRequest
     * @param {Number} requestedByMe 
     * @param {Number} page
     */

    static GetDuelistRequest(data) {
        return super.send({ uri: super.getURI({ key: 'dueList', subKey: 'getduelistrequest' }), data: data });
    }

    /**
     * @description ConfirmDuelistRequest
     * @name ConfirmDuelistRequest
     * @param {Number} duelistRequestId 
     */

    static ConfirmDuelistRequest(data) {
        return super.send({ uri: super.getURI({ key: 'dueList', subKey: 'confirmduelistrequest' }), data: data });
    }

    /**
     * @description GetDueList
     * @name GetDueList
     * @param {Number} duelistId 
     * @param {Number} page
     */

    static GetDueList(data) {
        return super.send({ uri: super.getURI({ key: 'dueList', subKey: 'getduelist' }), data: data });
    }
}