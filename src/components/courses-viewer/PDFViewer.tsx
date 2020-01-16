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

export default class PDFViewer extends React.Component {
    render() {
        return <PdfViewerComponent id="pdfViewer"
                                   documentPath="PDF_Succinctly.pdf"
                                   serviceUrl="https://ej2services.syncfusion.com/production/web-services/api/pdfviewer"
                                   style={{'height': '200px','overflow':"auto"}}
                                   enableNavigation={true} enableToolbar={false}>
            <Inject
                services={[Toolbar, Magnification, Navigation, Annotation, LinkAnnotation, BookmarkView, ThumbnailView, Print, TextSelection, TextSearch]}/>
        </PdfViewerComponent>;
    }
}
