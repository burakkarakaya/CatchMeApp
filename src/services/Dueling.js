import { BaseService } from './base';

/**
 * @namespace DuelingApi
*/

/**
 * @class DuelingApi
 */

export default class DuelingsService extends BaseService {
    /**
     * @description GetDuelingSessions
     * @name GetDuelingSessions
     * @param {Number} duelingType // 1 - 2
     * @param {Number} page
     * @param {string} searchText
     * @param {Number} memberId
     */

    static GetDuelingSessions(data) {
        return super.send({ uri: super.getURI({ key: 'duelingSession', subKey: 'getduelingsessions' }), data: data });
    }

    /**
     * @description GetDuelingContents
     * @name GetDuelingContents
     * @param {Number} duelingSessionId 
     * @param {Number} page
     */

    static GetDuelingContents(data) {
        return super.send({ uri: super.getURI({ key: 'duelingSession', subKey: 'getduelingcontents' }), data: data });
    }

    /**
     * @description GetDuelingSessions
     * @name GetDuelingSessions
     * @param {string} caption 
     * @param {string} keywords
     * @param {Number} duelingWithMemberId
     */

    static CreateDuelingSession(data) {
        return super.send({ uri: super.getURI({ key: 'duelingSession', subKey: 'createduelingsession' }), data: data });
    }
}