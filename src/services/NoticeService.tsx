import RestService, {restService} from "./RestService";
import Notice from "../interfaces/notice";
import {Page} from "../interfaces/page";
import * as endpoints from "../paths";

export default class NoticeService {
    constructor(private restService:RestService){
    }

    getNotices():Promise<Page<Notice>> {
        return this.restService.get(endpoints.notices);
    }

    getNoticesForSubject(subjectId: number, page:number=0, size:number=20):Promise<Page<Notice>> {
        return this.restService.get(`${endpoints.notices}?subjectId=${subjectId}`);
    }

    saveNotice(notice: Partial<Notice>): Promise<Notice> {
        return this.restService.post(endpoints.notices, notice);
    }
}

export const noticeService=new NoticeService(restService);
