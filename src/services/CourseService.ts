import RestService, {restService} from "./RestService";
import Course from "../interfaces/course";
import * as endpoints from "../paths";
import {Page} from "../interfaces/page";

export default class CourseService {
    constructor(private restService: RestService) {

    }

    getCourses(): Promise<Page<Course>> {
        return this.restService.get(endpoints.courses);
    }

    getCoursesBySubjectId(subjectId: number): Promise<Page<Course>> {
        return this.restService.get(`${endpoints.courses}?subjectId=${subjectId}`);
    }
}

export const courseService = new CourseService(restService);
