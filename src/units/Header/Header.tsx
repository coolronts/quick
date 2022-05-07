import {Logo} from '../../components/Logo/Logo';
import {Navbar} from '../Navbar/Navbar';

type HeaderProps = {
    title: string;
}


export const Header: React.FC<HeaderProps> = () => { 
    return (
        <div className="Header">
            <Logo />
            <Navbar />
        </div>
    );
}