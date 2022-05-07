import {Header} from '../../units/Header/Header';
import { currentTheme } from '../../atoms/index'
import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';

export const Front: React.FC = () => { 
    const currentThemes = useRecoilValue(currentTheme);
    useEffect(() => {
        console.log(currentThemes);
    }
    , [currentThemes]);
    return (
        <div style={{ backgroundColor: currentThemes.backgroundColor}}>
            <Header title="Front" />
        </div>
    );
}