export default interface Schedule{
    id:number;
    day:string;
    fromTime:TimeRanges;
    toTime: TimeRanges;
    room: string;
    teacherId: number;
    courseId: number;
}