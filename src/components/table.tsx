import React from 'react';
import { Table } from 'react-bootstrap';

interface IVariables {
    input1: string;
    input2: string;
}

interface Props {
    variables: IVariables[],
    removeVariable: (id: number) => void,
    variableList: unknown
}

const VariableListComponent: React.FC<Props> = ({ variables, }) => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>Название переменной</th>
                <th>Значение переменной</th>
            </tr>
            </thead>
            <tbody>
            {variables.map((variable, index) => (
                <tr key={index}>
                    <td>{variable.input1}</td>
                    <td>{variable.input2}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

export default VariableListComponent;
