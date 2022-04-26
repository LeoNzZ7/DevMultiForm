import * as c from './styles';
import { Link } from 'react-router-dom'
import { ReactComponent as ProfileIcon } from '../../svgs/profile.svg'
import { ReactComponent as BookIcon } from '../../svgs/book.svg'
import { ReactComponent as MailIcon } from '../../svgs/mail.svg'

type Props = {
    title: string;
    descripition: string;
    icon: string;
    path: string;
    active: boolean
}

export const SideBarItem = ({title, descripition, icon, path, active}: Props) => {
    return (
        <c.Container>
            <Link to={path} >
                <c.Info>
                    <c.Title>{title}</c.Title>
                    <c.Description>{descripition}</c.Description>
                </c.Info>
                <c.IconArea active={active} >
                    {icon === 'profile' &&
                        <ProfileIcon fill="#fff" width={24} height={24} />
                    }
                    {icon === 'book' &&
                        <BookIcon fill="#fff" width={24} height={24} />
                    }
                    {icon === 'mail' &&
                        <MailIcon fill="#fff" width={24} height={24} />
                    }
                </c.IconArea>
                <c.Point active={active}></c.Point>
            </Link>
        </c.Container>
    )
}