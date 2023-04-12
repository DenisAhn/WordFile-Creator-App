import React from 'react';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';

interface Props {
    variables: { id: number; input1: string; input2: string }[];
    removeVariables: (id: number) => void;
}

const VariableList: React.FC<Props> = ({ variables, removeVariables }) => {
    const handleRemoveVariable = (id: number) => {
        removeVariables(id);
    };

    return (
        <Container>
            <Row>
                <Col className="col-12">
                    <Table striped bordered hover responsive className="mt-4 table-responsive-sm">
                        <thead>
                        <tr>
                            <th>Название переменной</th>
                            <th>Значение переменной</th>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {variables.map((variable) => (
                            <tr key={variable.id}>
                                <td>{variable.input1}</td>
                                <td>{variable.input2}</td>
                                <td>
                                    <Button variant="danger" size="sm" onClick={() => handleRemoveVariable(variable.id)}>
                                        Remove
                                    </Button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container>
    );
};

export default VariableList;
