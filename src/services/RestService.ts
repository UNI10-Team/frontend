export class RestService {

    get(path: string, headers?: Headers): Promise<any> {
        return fetch(path, {headers}).then(data => data.json());
    }

    post(path: string, body: any, headers?: Headers): Promise<any> {
        body = JSON.stringify(body);
        return fetch(path, {body, headers}).then(data => data.json());
    }
}

export const restService = new RestService();
