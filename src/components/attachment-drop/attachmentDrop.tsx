import React, {Component} from "react";
import './attachmentDrop.css'
import Button from "@material-ui/core/Button/Button";
import Attachment from "../../interfaces/attachment";

interface AttachmentDropProperties {
    courseId: number;
}

interface AttachmentDropState {
    files: Attachment[],
    error: string,
    msg: string
}

export class AttachmentDrop extends Component<AttachmentDropProperties, AttachmentDropState> {

    constructor(props: Readonly<AttachmentDropProperties>) {
        super(props);
        this.state = {
            files: [],
            error: '',
            msg: ''
        }
    }

    render() {
        return (
            <div onDragOver={this.onDragOver} onDragLeave={this.onDragLeave} className={"browse buttons"}>
                <input type="file" multiple onChange={this.onChange} className={"input"}/>
                <Button onClick={this.uploadFile} className={"upload"}>Încarcă</Button>
            </div>
        )
    }

    onDragOver = (event: any) => {
        event.preventDefault();
        console.log("onDragOver")
    };

    onDragLeave = (event: any) => {
        event.preventDefault();
        console.log("onDragEnd")
    };

    onChange = (event: any) => {
        this.uploadFile(event);
    };

    uploadFile = (event: any) => {
        event.preventDefault();
        const inputFiles = event.target.files;
        const {files} = this.state;
        for (let i = 0; i < inputFiles.length; i++) {
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
                        files.push({id, name, data: data, type,courseId});
                        this.setState({
                            files
                        });
                    }
                }
            }
        }
    }
}
