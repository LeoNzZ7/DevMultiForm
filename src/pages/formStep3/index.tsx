import * as c from './styles';
import { useForm, FormActions } from '../../contexts/formContext';
import { Theme } from '../../components/theme';
import { useNavigate } from 'react-router-dom';
import { ChangeEvent, useEffect } from 'react';

export const FormStep3 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setEmail,
            payload: e.target.value
        });
    };

    const handleGitHubChange = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch({
            type: FormActions.setGitHub,
            payload: e.target.value
        });
    };

    const handlePrevStep = () => {
        navigate('/step2');
    };
    const handleNextStep = () => {
        if(state.name !== '' && state.gitHub !== '' && state.name !== '') {
            navigate('/stepfinish')
        } else {
            alert('Preencha todos os dados para finalizar cadastro');
        }
    };

    useEffect(() => {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 3
        });
    }, []);

    return (
        <Theme>
            <c.Container>
                <p>Passo 3/3</p>
                <h1>Legal {state.name}, onde te achamos?</h1>
                <p>Preencha o campo abaixo com o seu nome completo.</p>
                <hr/>
                <label>
                    Qual o seu E-mail?
                    <input type='text' value={state.email} onChange={handleEmailChange} required />
                </label>
                <label>
                    Qual o link do seu perfil do gitHub?
                    <input type='url' value={state.gitHub} onChange={handleGitHubChange} required />
                </label>
                <button className='backButton' onClick={handlePrevStep}>Voltar</button>
                <button onClick={handleNextStep}>Finalizar Cadastro</button>
            </c.Container>
        </Theme>
    );
}