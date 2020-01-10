import {Page} from "../interfaces/page";
import Subject from "../interfaces/subject";
import RestService, {restService} from "./RestService";
import * as endpoints from "../paths";


export default class SubjectService {

    constructor(private restService: RestService) {
    }

    getSubjects(): Promise<Page<Subject>>{
        return this.restService.get(endpoints.subjects);
    }

    getSubjectsForTeacher(teacherId: number): Promise<Page<Subject>>{
        return this.restService.get(`${endpoints.subjects}?teacherId=${teacherId}`);
    }
}

export const subjectService = new SubjectService(restService);