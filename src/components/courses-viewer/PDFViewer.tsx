import * as React from 'react';
import {Component} from "react";

export interface PDFViewerProperties {
    visible: boolean;
    document: any;
}


export interface PDFViewerState {
}

export default class PDFViewer extends Component<PDFViewerProperties, PDFViewerState> {

    constructor(props: PDFViewerProperties) {
        super(props);
    }

    render() {
        const {visible, document} = this.props;
        console.log(document);
        if (!visible) {
            return null;
        } else {
            return (

                <object style={{"width": "850px", "height": "520px"}} data={document}>
                    <iframe src="https://docs.google.com/viewer?&embedded=true"/>
                </object>
            )
        }
    }
}
