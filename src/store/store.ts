import { observable, action } from 'mobx';

export interface Variables {
    id: number;
    input1: string;
    input2: string;

}

class VariableStore {
    @observable variables: Variables[] = [];

    @action addVariable = (variable: Variables) => {
        this.variables.push(variable);
    };

    @action removeVariable = (id: number) => {
        this.variables = this.variables.filter((variable) => variable.id !== id);
    };
    @action setVariable = (variables: Variables[]) => {
        this.variables = variables;
    };
}

const variableStore = new VariableStore();

export default variableStore ;

