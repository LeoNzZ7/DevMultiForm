import { ReactNode } from 'react';
import * as c from './styles';
import { Header } from '../Header';
import { SideBarItem } from '../sideBarItem'
import {useForm} from '../../contexts/formContext'

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    const { state } = useForm();

    return(
        <c.Container>
            <c.Area>
                <Header />
                <c.Steps>
                    <c.SideBar>
                        <SideBarItem
                        title="Pessoal"
                        descripition="Se indetifique"
                        icon="profile"
                        path="/"
                        active={state.currentStep === 1}
                        />
                        <SideBarItem
                        title="Profisional"
                        descripition="Seu nivel"
                        icon="book"
                        path="/step2"
                        active={state.currentStep === 2}
                        />
                        <SideBarItem
                        title="Contatos"
                        descripition="Como te achar"
                        icon="mail"
                        path="/step3"
                        active={state.currentStep === 3}
                        />
                    </c.SideBar>
                    <c.Page>
                        {children}
                    </c.Page>
                </c.Steps>
            </c.Area>
        </c.Container>
    );
}