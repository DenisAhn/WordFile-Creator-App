import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';

interface Props {
    addVariable: (input1: string, input2: string) => void;
}

const FormComponent: React.FC<Props> = ({ addVariable }) => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");
    const [valid, setValid] = useState(false);
    const [error, setError] = useState("");

    const handleInput1Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput1(e.target.value);
        setValid(e.target.value.trim() !== "" && input2.trim() !== "");
    };

    const handleInput2Change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput2(e.target.value);
        setValid(e.target.value.trim() !== "" && input1.trim() !== "");
    };

    const handleAddVariable = () => {
        if (input1.trim() === "" || input2.trim() === "") {
            setError("Please fill in both inputs");
            return;
        }


        addVariable(input1, input2);
        setInput1("");
        setInput2("");
        setError("");
        setValid(false);
    };

    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col xs={12} md={8} lg={6}>
                    <Form>
                        {error && <Alert variant="danger">{error}</Alert>}
                        <Row>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="formInput1">
                                    <Form.Label>Input 1</Form.Label>
                                    <Form.Control className="mb-2" type="text" value={input1} onChange={handleInput1Change} />
                                </Form.Group>
                            </Col>
                            <Col xs={12} md={6}>
                                <Form.Group controlId="formInput2">
                                    <Form.Label>Input 2</Form.Label>
                                    <Form.Control className="mb-2" type="text" value={input2} onChange={handleInput2Change} />
                                </Form.Group>
                            </Col>
                        </Row>
                        <Button className="my-3 px-4 d-block mx-auto" variant="primary" type="button" disabled={!valid} onClick={handleAddVariable}>
                            Add
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
};

export default FormComponent;
