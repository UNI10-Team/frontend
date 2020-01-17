import RestService from "./RestService";
import Attachment from "../interfaces/attachment";
import * as endpoints from "../paths";
export default class AttachmentService {
    constructor(private restService: RestService) {
    }

    saveAttachment(attachment: Partial<Attachment>): Promise<Attachment> {
        return this.restService.post(endpoints.attachments, attachment);
    }
}
