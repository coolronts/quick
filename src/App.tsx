import './App.css';

import { Route, Routes } from "react-router-dom";
import {useEffect, useState} from 'react';

import {Front} from './pages';
import {SettingDao} from './apis/settings';
import { allColorTheme } from './atoms/index'
import { useRecoilState } from 'recoil';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [allColorThemes, setAllColorThemes] = useRecoilState(allColorTheme);
  useEffect(() => {
    SettingDao.getColorTheme().then(res => {
      setAllColorThemes(res)
      setIsLoading(false);
    });
  }, []);
  
  return (
    <>
      {isLoading ? <div>Loading...</div> :
        <div className="App" style={{  height:"100vh" }}>
          <Routes>
            <Route path="/" element={<Front />} />
          </Routes>
        </div>
      }
    </>
  );
}

export default App;
