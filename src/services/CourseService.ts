import RestService, {restService} from "./RestService";
import Course from "../interfaces/course";
import * as endpoints from "../paths";

export default class CourseService {
    constructor(private restService: RestService) {

    }

    getCourses(): Promise<Course> {
        return this.restService.get(endpoints.courses);
    }

    getCoursesBySubjectId(subjectId: number): Promise<Course> {
        return this.restService.get(`${endpoints.courses}?subjectId=${subjectId}`);
    }
}

export const courseService = new CourseService(restService);
