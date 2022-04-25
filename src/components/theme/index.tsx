import { ReactNode } from 'react';
import * as c from './styles'
import { Header } from '../Header'

type Props = {
    children: ReactNode;
}

export const Theme = ({ children }: Props) => {
    return(
        <c.Container>
            <c.Area>
                <Header />
                <c.Steps>
                    <c.SideBar>
                        ...
                    </c.SideBar>
                    <c.Page>
                        {children}
                    </c.Page>
                </c.Steps>
            </c.Area>
        </c.Container>
    );
}