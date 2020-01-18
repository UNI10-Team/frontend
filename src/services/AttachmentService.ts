import RestService, {restService} from "./RestService";
import Attachment, {UnsavedAttachment} from "../interfaces/attachment";
import * as endpoints from "../paths";
import FileService, {fileService} from "./FileService";
export default class AttachmentService {
    constructor(private restService: RestService, private fileService: FileService) {
    }

    saveAttachment(attachment: Partial<UnsavedAttachment>): Promise<Attachment> {
        return this.restService.post(endpoints.attachments, attachment);
    }

    getAttachmentById(attachmentId: number): Promise<any> {
        return this.fileService.get(`${endpoints.attachments}/${attachmentId}`);
    }
}

export const attachmentService = new AttachmentService(restService, fileService);
