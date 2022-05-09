import './App.css';

import { Route, Routes } from "react-router-dom";
import { allColorTheme, currentTheme } from './atoms/index'
import {useEffect, useState} from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';

import {Front} from './pages';
import {SettingDao} from './apis/settings';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [allColorThemes, setAllColorThemes] = useRecoilState(allColorTheme);
  useEffect(() => {
    SettingDao.getColorTheme().then(res => {
      setAllColorThemes(res)
      setIsLoading(false);
    });
  }, []);

  const currentThemes = useRecoilValue(currentTheme);
  
  return (
    <>
      {isLoading ? <div>Loading...</div> :
        <div className="App" style={{ backgroundColor:currentThemes.backgroundColor,  height:"100vh"}}>
          <Routes>
            <Route path="/" element={<Front />} />
          </Routes>
        </div>
      }
    </>
  );
}

export default App;
