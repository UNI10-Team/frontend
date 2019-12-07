export class RestService {

    get(path: string, headers?: Headers): Promise<any> {
        return fetch(path, {headers}).then(data => data.json());
    }

    post(path: string, body: any, headers?: Headers): Promise<any> {
        body = JSON.stringify(body);
        return fetch(path, {body, headers, method: 'POST'}).then(data => data.json());
    }

}

const restService = new RestService();

export default restService;
