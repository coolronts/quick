import {currentTheme} from '../../atoms/index'
import styles from './Logo.module.css'
import {useRecoilValue} from 'recoil'

export const Logo: React.FC = () => { 
    const currentThemes = useRecoilValue(currentTheme);
    return (
        <div className={styles.logo} style={{color: currentThemes.secondaryColor}}>
            <h1>Logo</h1>
        </div>
    );
}