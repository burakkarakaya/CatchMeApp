import { AsyncStorage } from '_helper';
import urls from './urls';

const Customers = {
    keys: {
        user: '@user',
        token: '@token'
    },
    user: null,
    token: null,
    setUser: async (user = {}) => {
        const _self = Customers;

        try {
            _self.user = user;
            await AsyncStorage.setItem({ key: _self.keys.user, value: JSON.stringify(user) });

        } catch (error) {
            console.warn('error set user ', error);
        }
    },
    getUser: () => {
        const _self = Customers;
        return _self.user || {};
    },
    setToken: async (token = {}) => {
        const _self = Customers;

        try {
            _self.token = token;
            await AsyncStorage.setItem({ key: _self.keys.token, value: JSON.stringify(token) });
        } catch (error) {
            console.warn('error set token ', error);
        }
    },
    getToken: () => {
        const _self = Customers;
        return _self.token || null;
    },

    refreshToken: async () => {
        const _self = Customers,
            url = BaseService.baseUrl + BaseService.url.auth.login,
            data = _self.user;
        console.warn(url);
        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
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
};

class BaseService {
    static url = urls;

    static baseUrl = `http://dev.catchme.com`;

    static async Post(url = '', data = {}) {

        const _headers = {
            'Content-Type': 'application/json',
        };

        const token = Customers.getToken();
        if (token != null) {
            try {
                const k = await Customers.refreshToken();

                console.warn(k);

                _headers.Authorization = `Bearer ${k.data.accessToken}`;
            } catch (error) {

            }

        }

        console.warn('gototottototottot', _headers);

        return new Promise((resolve, reject) => {

            fetch(url, {
                method: 'POST',
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

    static Get(url = '') {

        return new Promise((resolve, reject) => {

            fetch(this.baseUrl + url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                }
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
}

export { BaseService, Customers };