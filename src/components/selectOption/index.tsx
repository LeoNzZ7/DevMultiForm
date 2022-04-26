import * as c from './styles';

type Props = {
    title: string;
    description: string;
    icon: string;
    selected: boolean;
    onClick: () => void;
}

export const SelectOption = ({title, description, icon, selected, onClick}: Props) => {
    return (
        <c.Container onClick={onClick} selected={selected}>
            <c.Icon>{icon}</c.Icon>
            <c.Info>
                <c.Title>{title}</c.Title>
                <c.Description>{description}</c.Description>
            </c.Info>
        </c.Container>
    )
}