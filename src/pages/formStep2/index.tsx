import * as c from './styles';
import { useForm, FormActions } from '../../contexts/formContext';
import { Theme } from '../../components/theme';
import { SelectOption } from '../../components/selectOption';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export const FormStep2 = () => {
    const navigate = useNavigate();
    const { state, dispatch } = useForm();

    const handleNextStep = () => {
        if(state.name !== '') {
            navigate('/step3')
        } else {
            alert('Preencha os dados necessarios para proseguir')
        }
    };

    const handlePrevStep = () => {
        navigate('/')
    };

    const setLevel = (level: number) => {
        dispatch({
            type: FormActions.setLevel,
            payload: level
        })
    }

    useEffect(() => {
        if(state.name === '') {
            navigate('/')
        } else {
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 2
        });
    }}, []);

    return (
        <Theme>
            <c.Container>
                <p>Passo 2/3</p>
                <h1>{state.name}, o que melhor descreve você?</h1>
                <p>Escolha a opção que melhor condiz com seu estado atual, profissionalmente.</p>
                <hr/>
                <SelectOption
                title={"Sou iniciante"}
                description={"Comecei a programar a menos de 2 anos"}
                icon={"👶"}
                selected={state.level === 0}
                onClick={() => setLevel(0)}
                />
                <SelectOption
                title={"Sou Programador"}
                description={"Já programo a 2 anos ou mais"}
                icon={"😎"}
                selected={state.level === 1}
                onClick={() => setLevel(1)}
                />
                
                <button className='backButton' onClick={handlePrevStep}>Voltar</button>
                <button onClick={handleNextStep}>Próximo</button>
               
            </c.Container>
        </Theme>
    );
}