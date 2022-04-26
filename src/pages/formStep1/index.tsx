import * as c from './styles';
import { useForm, FormActions } from '../../contexts/formContext';
import { Theme } from '../../components/theme';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';

export const FormStep1 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step2')
        } else {
            alert('Preencha os dados necessarios para proseguir')
        }
    };

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setName,
            payload: e.target.value
        });
    }

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        });
    }, []);

    return (
        <Theme>
            <c.Container>
                <p>Passo 1</p>
                <h1>Vamos começar com o seu nome.</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>
                <hr/>
                <label>
                    Seu nome completo
                    <input type='text' value={state.name} onChange={handleNameChange} autoFocus required />
                </label>
                <button onClick={handleNextStep}>Próximo</button>
            </c.Container>
        </Theme>
    );
}