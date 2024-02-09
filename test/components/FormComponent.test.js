import { fireEvent, render, screen } from "@testing-library/react";
import { FormComponent } from "../../src/components/FormComponent";

describe('Pruebas en <FormComponent/>', () => { 
    test('prueba de la serie', () => {

        const inputValue = 2;

        render( <FormComponent/>);
        
        const input = screen.getByLabelText('number');
        const form = screen.getByRole('form');

        fireEvent.input( input, { target: { value: inputValue} });
        fireEvent.submit(form);

        screen.debug();
    });

 });

