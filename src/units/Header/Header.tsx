import {DarkLightMode} from '../../components/Icons/Icons';
import {Logo} from '../../components/Logo/Logo';
import {Navbar} from '../Navbar/Navbar';
import {colorMode} from '../../atoms/index';
import styles from './Header.module.css';
import {useRecoilState} from 'recoil';

type HeaderProps = {
    title: string;
}


export const Header: React.FC<HeaderProps> = () => {
    const [colorModeState, setColorModeState] = useRecoilState(colorMode);
    const handleColorMode = () => setColorModeState(!colorModeState);

    return (
        <div className="Header">
            <div className={styles.firstLine}>
                <Logo />
                <DarkLightMode className={styles.icon} style={{ fontSize: '30px' }} onClick={()=> handleColorMode() }/>
            </div>
            <Navbar />
        </div>
    );
}