import React, {useState, useEffect} from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import FormComponent from './components/form';
import VariableList from './components/VariableList';
import variableStore from './store/store';
import DownloadDocxBtn from './components/DownloadButton';
import 'bootstrap/dist/css/bootstrap.min.css';
interface Variable {
    id: number;
    input1: string;
    input2: string;
}

const App: React.FC = () => {
    const [variables, setVariables] = useState<Variable[]>([]);

    useEffect(() => {
        variableStore.setVariable(variables);
    }, [variables]);

    const addVariable = (input1: string, input2: string) => {
        const newTodo: Variable = {
            id: Date.now(),
            input1,
            input2,
        };
        setVariables([...variables, newTodo]);
        variableStore.addVariable(newTodo);
    };

    const removeVariable = (id: number) => {
        const updatedVariables = variables.filter((todo) => todo.id !== id);
        setVariables(updatedVariables);
        variableStore.removeVariable(id);
    }
    return (
        <Container fluid className="p-0">
            <Row className="m-0">
                <Col md={{ span: 6, offset: 3 }} className="p-3">
                    <h1 className="text-center mb-4">Создание Word файла</h1>
                    <FormComponent addVariable={addVariable} />
                    <VariableList variables={variables} removeVariables={removeVariable} />
                    <DownloadDocxBtn />
                </Col>
            </Row>
        </Container>
    );
};

export default App;
