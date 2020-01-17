import {Page} from "../interfaces/page";
import Subject from "../interfaces/subject";
import RestService, {restService} from "./RestService";
import * as endpoints from "../paths";
import Comment from "../interfaces/comment";


export default class CommentService {

    constructor(private restService: RestService) {
    }

    getComments(): Promise<Page<Subject>>{
        return this.restService.get(endpoints.comments);
    }

    getCommentsForAttachment(attachmentId: number): Promise<Page<Comment>>{
        return this.restService.get(`${endpoints.comments}?attachmentId=${attachmentId}`);
    }

    getCommentsForSubject(subjectId: number, page: number = 0, size: number = 20):Promise<Page<Comment>> {
        return this.restService.get(`${endpoints.comments}?subjectId=${subjectId}`);
    }

    getCommentsForSubjectAttachment(attachmentId: number,subjectId: number, page: number = 0, size: number = 20): Promise<Page<Comment>> {
        return this.restService.get(`${endpoints.comments}?subjectId=${subjectId}&attachmentId=${attachmentId}`);
    }

    deleteComment(commentId: number) : Promise<Comment> {
        return this.restService.delete(`${endpoints.comments}/${commentId}`);
    }

    saveComment(comment: Partial<Comment>): Promise<Comment> {
        return this.restService.post(endpoints.comments, comment);
    }

    updateComment(comment: Partial<Comment>):Promise<Comment> {
        return this.restService.put(`${endpoints.comments}/${comment.id}`, comment);
    }
}

export const commentService = new CommentService(restService);
