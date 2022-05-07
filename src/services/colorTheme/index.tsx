import {AxiosResponse} from 'axios';
import { SettingDao } from '../../apis/settings';
import { allColorTheme } from '../../atoms/index';
import { useRecoilState } from 'recoil';

export function SetColorTheme():Promise<boolean> {
    const [allColorThemes, setAllColorThemes] = useRecoilState(allColorTheme);
    return SettingDao.getColorTheme().then(res => {
        setAllColorThemes(res);
        return true;
    })
}
