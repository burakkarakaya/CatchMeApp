import { BaseService } from './base';

/**
 * @namespace DuelingApi
*/

/**
 * @class DuelingApi
 */

export default class DuelingsService extends BaseService {
    /**
     * @description GetDuelings
     * @name getDuelings
     * @param {Number} duelingType = 1
     */

    static GetDuelings(data) {
        return super.send({ uri: super.getURI({ key: 'dueling', subKey: 'getduelings' }), data: data });
    }

    /**
     * @description GetDueled
     * @name getDueled
     * @param {Number} duelingType = 2
     */

    static GetDueled(data) {
        return super.send({ uri: super.getURI({ key: 'dueling', subKey: 'getduelings' }), data: data });
    }
}