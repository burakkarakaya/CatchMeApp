import urls from './urls';

export default class BaseService {
    static url = urls;

    static baseUrl = `http://dev.catchme.com`;

    static async Post(url = '', data = {}) {

        console.warn(this.baseUrl + url, data);

        try {
            const response = await fetch(this.baseUrl + url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });
            return await response.json();
        } catch (error) {
            return new Error(error.message);
        }
    }

    static async Get(url = '') {
        try {
            const response = await fetch(this.baseUrl + url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            return await response.json();
        } catch (error) {
            return new Error(error.message);
        }
    }
}
