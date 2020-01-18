import React, {Component} from "react";
import './attachmentDrop.css'
import Button from "@material-ui/core/Button/Button";
import Attachment, {UnsavedAttachment} from "../../interfaces/attachment";
import {attachmentService} from "../../services/AttachmentService";

interface AttachmentDropProperties {
    courseId: number;
    type: string
}

interface AttachmentDropState {
    attachments: UnsavedAttachment[],
    error: string,
    msg: string
}

export class AttachmentDrop extends Component<AttachmentDropProperties, AttachmentDropState> {

    constructor(props: Readonly<AttachmentDropProperties>) {
        super(props);
        this.state = {
            attachments: [],
            error: '',
            msg: ''
        }
    }

    render() {
        return (
            <div>
                <input type="file" onChange={this.onChange} className={"input"}/>
                <Button onClick={this.uploadFile} className={"upload"}>Încarcă</Button>
            </div>
        )
    }
    uploadFile = () => {
        this.state.attachments.forEach(attachment => attachmentService.saveAttachment(attachment));
    };

    onChange = (event: any) => {
        const inputFiles = event.target.files;
        const {attachments} = this.state;
        // for (let i = 0; i < inputFiles.length; i++) {
        for (let i = 0; i < 1; i++) {
            const file = inputFiles.item(i);
            if (file != null) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    const id = 0;
                    const name = file.name;
                    const data = reader.result;
                    const type = file.type;
                    const courseId = this.props.courseId;
                    if (data !== null) {
                        attachments.push({id, name, data: data, type, courseId, courseType: this.props.type});
                        this.setState({
                            attachments
                        });
                    }
                }
            }
        }
    }
}
