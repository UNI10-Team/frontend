export default interface Attachment{
    id:number;
    data:string | ArrayBuffer;
    name:string;
    type:string;
    courseId:number;
}

export interface UnsavedAttachment extends Attachment{
    courseType: string
}
