import * as c from './styles';
import { useForm, FormActions } from '../../contexts/formContext';
import { useNavigate } from 'react-router-dom';

export const FinishRegister = () => {
    const { state, dispatch } = useForm();
    const navigate = useNavigate();

    const handleRegister = () => {
        navigate('/');
        dispatch({
            type: FormActions.setName,
            payload: ''
        })
        dispatch({
            type: FormActions.setEmail,
            payload: ''
        })
        dispatch({
            type: FormActions.setGitHub,
            payload: ''
        })
        dispatch({
            type: FormActions.setLevel,
            payload: 0
        })
        dispatch({
            type: FormActions.setCurrentStep,
            payload: 1
        })
    }

    return (
        <c.Container>
            <c.Header>
                <c.Title>
                    Cadastro finalizado
                </c.Title>
            </c.Header>
            <c.Area>
                <c.InfoArea>
                    <c.Info>
                        <h3>Nome</h3> 
                        <p> {state.name}</p>
                    </c.Info>
                     <c.Info>
                        <h3>Experiência</h3> 
                        {state.level === 0 &&
                            <p>Iniciante</p>
                        } {state.level === 1 &&
                            <p>Programador</p>
                        }
                    </c.Info>
                    <c.Info>
                        <h3>E-mail</h3> 
                        <p> {state.email}</p>
                    </c.Info>
                     <c.Info>
                        <h3>GitHub</h3> 
                        <p>{state.gitHub}</p>
                    </c.Info>
                </c.InfoArea>
                <c.BackArea>
                    <h4>Logo entraremos em contatos com vagas que corespondão ao seu perfil</h4>
                    <button onClick={handleRegister} >Refazer cadastro</button>
                </c.BackArea>
            </c.Area>
        </c.Container>
    )
}