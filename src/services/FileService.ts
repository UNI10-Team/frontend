import RestService, {restService} from "./RestService";

export default class FileService {

    constructor(private restService: RestService) {}

    private defaultHeaders: any = {
        "Content-type": "application/text"
    };

    get(path: string, headers?: Headers): Promise<any> {
        return fetch(path, {
            headers: {
                ...this.restService.defaultHeaders,
                ...this.defaultHeaders,
                ...headers
            }
        }).then(data => data.blob());
    }

}

export const fileService = new FileService(restService);
