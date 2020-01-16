export default interface Comment{
    id:number;
    text:string;
    userId:number;
    username:string;
    attachmentId:number;
    subjectId:number;
    accepted: boolean;
}
