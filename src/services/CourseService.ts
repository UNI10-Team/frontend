import RestService, {restService} from "./RestService";
import Course from "../interfaces/course";
import * as endpoints from "../paths";
import {Page} from "../interfaces/page";

export default class CourseService {
    constructor(private restService: RestService) {

    }

    getAllCourses(): Promise<Page<Course>> {
        return this.restService.get(endpoints.courses);
    }

    getCoursesByTypeSubject(type: string, subjectId: number): Promise<Page<Course>> {
        return this.restService.get(`${endpoints.courses}?subjectId=${subjectId}&type=${type}`);
    }

    getCoursesBySubjectId(subjectId: number): Promise<Page<Course>> {
        return this.restService.get(`${endpoints.courses}?subjectId=${subjectId}`);
    }

    getLaboratories(subjectId: number): Promise<Page<Course>> {
        return this.restService.get(`${endpoints.courses}?subjectId=${subjectId}&type=Laborator`);
    }

    getSeminaries(subjectId: number): Promise<Page<Course>> {
        return this.restService.get(`${endpoints.courses}?subjectId=${subjectId}&type=Seminar`);
    }

    getCourses(subjectId: number): Promise<Page<Course>> {
        return this.restService.get(`${endpoints.courses}?subjectId=${subjectId}&type=Curs`);
    }
}

export const courseService = new CourseService(restService);
