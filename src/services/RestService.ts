export class RestService {

    get(path: string, headers?: Headers): Promise<any> {
        return fetch(path, {headers});
    }

    post(path: string, body: any, headers?: Headers): Promise<any> {
        return fetch(path, {body, headers});
    }
}

export const restService = new RestService();
