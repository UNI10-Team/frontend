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
            },
            method: 'GET'
        }).then(response => RestService.json(response));
    }

    post(path: string, body: any, headers?: Headers): Promise<any> {
        body = JSON.stringify(body);
        return fetch(path, {
            body,
            headers: {
                ...this.defaultHeaders, ...headers
            },
            method: 'POST'
        }).then(RestService.json);
    }

    put(path: string, body: any, headers?: Headers): Promise<any> {
        body = JSON.stringify(body);
        return fetch(path, {
            body,
            headers: {
                ...this.defaultHeaders, ...headers
            },
            method: 'PUT'
        }).then(RestService.json);
    }

    delete(path: string, headers?: Headers): Promise<any> {
        return fetch(path, {
            headers: {
                ...this.defaultHeaders,
                ...headers
            },
            method: 'DELETE'
        }).then(()=>console.log("ok"));
    }

    addJWT(jwt: string) {
        this.jwt = jwt;
        this.defaultHeaders = {...this.defaultHeaders, "Authorization": `Bearer ${jwt}`}
    }

    parseJWT() {
        return decoder(this.jwt);
    }

    removeJWT() {
        this.jwt = "";
        this.defaultHeaders = {'Content-type': 'application/json'};
    }


    private static json = (response: Response) => {
        if (response.ok) {
            return response.json();
        } else {
            console.log(response.statusText);
            throw new Error(response.statusText);
        }
    }
}


export const restService = new RestService();

