import * as React from 'react';
import {
    PdfViewerComponent,
    Toolbar,
    Magnification,
    Navigation,
    LinkAnnotation,
    BookmarkView,
    ThumbnailView,
    Print,
    TextSelection,
    Annotation,
    TextSearch,
    Inject
} from '@syncfusion/ej2-react-pdfviewer';
import {Component} from "react";

export interface PDFViewerProperties {
    visible: boolean
}


export interface PDFViewerState {
}

export default class PDFViewer extends Component<PDFViewerProperties, PDFViewerState> {

    constructor(props: PDFViewerProperties) {
        super(props);
    }

    render() {
        return (
            <div className='control-section' style={{"visibility": this.props.visible ? "visible" : "hidden"}}>
                <PdfViewerComponent
                    id="container" documentPath="PDF_Succinctly.pdf"
                    serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
                    style={{'height': '440px', "visibility": this.props.visible ? "visible" : "hidden"}}>
                    <Inject
                        services={[Toolbar, Magnification, Navigation, LinkAnnotation, Annotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]}/>
                </PdfViewerComponent>
            </div>
        );
    }
}
