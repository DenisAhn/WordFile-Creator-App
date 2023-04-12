import { saveAs } from 'file-saver';
import { Document, Packer, Paragraph, Table, TableRow, TableCell } from 'docx';
import {Button} from 'react-bootstrap'

import variableStore  from '../store/store';

const DownloadDocxBtn = () => {
    const downloadDocx = () => {
        const arrayOfInputs = variableStore.variables
        const doc = new Document({
            sections: [{
                children: [
                    new Table({
                        rows: [
                            new TableRow({
                                children: [
                                    new TableCell({children: [new Paragraph('Описание переменной')]}),
                                    new TableCell({children: [new Paragraph('Значение переменной')]})
                                ]
                            }),
                            ...arrayOfInputs.map(todo => new TableRow({
                                children: [
                                    new TableCell({children: [new Paragraph(todo.input1)]}),
                                    new TableCell({children: [new Paragraph(todo.input2)]})
                                ]
                            }))
                        ]
                    })
                ]
            }]
        })

        Packer.toBlob(doc).then(blob => {
            console.log(blob);
            saveAs(blob, "example.docx");
            console.log("Document created successfully");
        });
    };

    return (
        <div className="d-flex justify-content-end">
            <Button variant="primary" onClick={downloadDocx}>
                Get File
            </Button>
        </div>
    )}

export default DownloadDocxBtn;
