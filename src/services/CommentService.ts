import {Page} from "../interfaces/page";
import Subject from "../interfaces/subject";
import RestService, {restService} from "./RestService";
import * as endpoints from "../paths";


export default class CommentService {

    constructor(private restService: RestService) {
    }

    getComments(): Promise<Page<Subject>>{
        return this.restService.get(endpoints.comments);
    }

    getCommentsForAttachment(attachmentId: number): Promise<Page<Comment>>{
        return this.restService.get(`${endpoints.comments}?attachmentId=${attachmentId}`);
    }

    deleteComment(commentId: number) : Promise<Comment> {
        return this.restService.delete(`${endpoints.comments}/${commentId}`);
    }

    postComment(comment:Comment): Promise<Comment>
    {
        return this.restService.post(endpoints.comments, comment);
    }
}

export const commentService = new CommentService(restService);