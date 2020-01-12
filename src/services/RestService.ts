const decoder = require('jwt-decode');

export default class RestService {

    defaultHeaders: any = {
        'Content-type': 'application/json'
    };

    public jwt: string = '';

    get(path: string, headers?: Headers): Promise<any> {
        return fetch(path, {
            headers: {
                ...this.defaultHeaders, ...headers
            }
        }).then(data => data.json());
    }

    post(path: string, body: any, headers?: Headers): Promise<any> {
        body = JSON.stringify(body);
        return fetch(path, {
            body,
            headers: {
                ...this.defaultHeaders, ...headers
            },
            method: 'POST'
        }).then(data => data.json());
    }

    delete(path: string, headers?: Headers): Promise<any> {
        return fetch(path, {headers: {...this.defaultHeaders, ...headers},method: 'DELETE'}).then(data => data.json());
    }

    addJWT(jwt: string) {
        this.jwt = jwt;
        this.defaultHeaders = {...this.defaultHeaders, "Authorization": `Bearer ${jwt}`}
    }

    parseJWT() {
        return decoder(this.jwt);
    }

}

export const restService = new RestService();

