import React, {Component} from "react";
import './attachmentDrop.css'
import Button from "@material-ui/core/Button/Button";
interface AttachmentDropProperties {

}

interface AttachmentDropState {
    files: FileList,
    error: string,
    msg: string
}

export class AttachmentDrop extends Component<AttachmentDropProperties, AttachmentDropState> {
    private attachments: any = [];


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
        this.setState({
            files: event.target.files
        })
    };

    uploadFile = (event: any) => {
        event.preventDefault();
        this.setState({error: '', msg: ''});

        if (!this.state.files) {
            this.setState({error: 'Please upload files.'});
            return;
        }
        const files = this.state.files;
        for (let i = 0; i < files.length; i++) {
            const file = files.item(i);
            if (file != null) {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.attachments.push({id: -1, name: file.name, file: reader.result, bugId: -1, type: file.type});
                }
            }
        }
        // attachments contains all the uploaded files
        console.log(this.attachments);
    }
}
