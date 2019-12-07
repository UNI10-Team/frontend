import React, {Component} from "react";

interface AttachmentDropProperties {

}

interface AttachmentDropState {

}

export class AttachmentDrop extends Component{


    render(){
        return (
            <div onDragOver={this.onDragOver} onDragLeave={this.onDragLeave}>
                <input type="file" multiple onChange={this.onChange}/>
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
        /*
        if (event.target.files && event.target.files.length) {
            const files: FileList = event.target.files;
            for (let i = 0; i < files.length; i++) {
                const file = files.item(i);
                console.log(file.type);
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => {
                    this.attachments.push({id: -1, name : file.name, file: reader.result, bugId: -1, type: file.type});
                };
            }
            this.cd.markForCheck();
        }
         */
    };
}
