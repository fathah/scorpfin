import { Document, Page } from 'react-pdf'
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;


const WHitePaper = () => {
    return (
        <div>
<Document file="https://scorpion-finance.com/files/ScorpFin_WhitePaper.pdf"
>
<Page
/></Document>
        </div>
    );
}
 
export default WHitePaper;