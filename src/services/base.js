import { AsyncStorage } from '_helper';
import urls from './urls';

function getExpireDate(expireInMinutes) {
    const now = new Date();
    let expireTime = new Date(now);
    expireTime.setMinutes(now.getMinutes() + expireInMinutes);
    return expireTime;
}

const Customers = {
    expireInMinutes: 1,
    keys: {
        user: '@user'
    },

    user: null,
    setUser: async (user = {}) => {
        const _self = Customers;

        try {
            _self.user = user;
            await AsyncStorage.setItem({ key: _self.keys.user, value: JSON.stringify(user) });

        } catch (error) {
            console.warn('error set user ', error);
        }
    },
    getUser: async () => {
        const _self = Customers;

        try {
            let user = await AsyncStorage.getItem({ key: _self.keys.user }) || '{}';
            user = await JSON.parse(user);
            return user;
        } catch (error) {
            console.warn('error set user ', error);
        }
    },

    authorization: {},
    setAuthorization: (data) => {
        const _self = Customers;
        _self.authorization = { expire: getExpireDate(_self.expireInMinutes), token: data.accessToken || '' };
    },
    checkAuthorization: () => {
        const _self = Customers,
            { expire = '' } = _self.authorization;

        console.warn(expire, new Date(expire) < (new Date()));

        if (new Date(expire) < (new Date()))
            return true;

        return false;
    },
    getToken: () => {
        const _self = Customers;
        return _self.authorization.token || null;
    },
    newToken: () => {
        const _self = Customers,
            uri = BaseService.getURI({ key: 'auth', subKey: 'login' }),
            data = _self.user;

        console.warn('get newtoken')

        return BaseService.ajx({ uri: uri, data: data });
    }

};


class BaseService {

    static url = urls;

    static baseUrl = `http://dev.catchme.com`;

    static getURI({ key, subKey }) {
        const _self = BaseService;
        return _self.baseUrl + (_self['url'][key][subKey] || '');
    }

    static ajx({ uri = '', data = {}, method = 'POST', _headers = { 'Content-Type': 'application/json' } }) {

        return new Promise((resolve, reject) => {

            fetch(uri, {
                method: method,
                headers: _headers,
                body: JSON.stringify(data),
            })
                .then(res => res.json())
                .then((res) => {

                    try {
                        if (!res.success) {
                            reject({ message: res.message });
                            return;
                        }

                        resolve(res);

                    } catch (err) {
                        reject({ message: err.message });
                    }

                })
                .catch((err) => {
                    reject({ message: err.message });
                });

        });

    }

    /**
     * @description send
     * @name send
     * @method send
     * @param {String} uri
     * @param {Object} data
     * @param {String} method
     * @param {Boolean} isToken
     */

    static async send({ uri = '', data = {}, method = 'POST', isToken = true }) {

        const _self = BaseService;

        const _headers = {
            'Content-Type': 'application/json',
        };

        if (isToken) {

            let token = Customers.getToken();

            if (Customers.checkAuthorization()) {
                try {
                    const k = await Customers.newToken();
                    Customers.setAuthorization(k.data);
                    token = Customers.getToken();
                } catch (error) {

                }
            }

            _headers.Authorization = `Bearer ${token}`;

        }


        return _self.ajx({ uri: uri, data: data, method: method, _headers: _headers });

    }

}

export { BaseService, Customers };