import urls from './urls';

export default class BaseService {
    static url = urls;

    static baseUrl = `http://dev.catchme.com`;

    static setCustomerToken(token) {
        this.customerToken = token;
    }

    static Post(url = '', data = {}) {

        console.warn(this.baseUrl + url, data);

        return new Promise((resolve, reject) => {

            fetch(this.baseUrl + url, {
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
                            reject(res.message);
                            return;
                        }

                        resolve(res);

                    } catch (err) {
                        reject(err.message);
                    }

                })
                .catch((err) => {
                    reject(err.message);
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
                            reject(res.message);
                            return;
                        }

                        resolve(res);

                    } catch (err) {
                        reject(err.message);
                    }

                })
                .catch((err) => {
                    reject(err.message);
                });

        });
    }
}
