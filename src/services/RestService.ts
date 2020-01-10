export default class RestService {

    private defaultHeaders: any = {
        "Content-type": "application/json"
    };

    get(path: string, headers?: Headers): Promise<any> {
        return fetch(path, {headers: {...this.defaultHeaders, ...headers}}).then(data => data.json());
    }

    post(path: string, body: any, headers?: Headers): Promise<any> {
        body = JSON.stringify(body);
        return fetch(path, {
            body,
            headers: {...this.defaultHeaders, ...headers},
            method: 'POST'
        }).then(data => data.json());
    }

    addJWT(jwt: string) {
        this.defaultHeaders = {...this.defaultHeaders, "Authorization": `Bearer ${jwt}`}
    }
}

export const restService = new RestService();

