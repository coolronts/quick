import { DownArrow } from '../Icons/Icons';
import {colorTheme} from '../../atom/index'
import styles from './Menu.module.css';
import {useRecoilValue} from 'recoil'

type PropParentMenuItem = {
    name: string;
    isChildren: boolean;
}
export const ParentMenuItem: React.FC<PropParentMenuItem> = ({ name, isChildren }) => {

const color = useRecoilValue(colorTheme);
    return (
        <div className={styles.parentMenuItem}>
            <p style={{color: color}}>{name}</p>
            {isChildren && <DownArrow />}
        </div>
    );
}

