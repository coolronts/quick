import './App.css';

import { Route, Routes } from "react-router-dom";

import {Front} from './pages';

function App() {
  const { REACT_APP_Snerling_ClientUID } = process.env;
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Front />} />
      </Routes>
    </div>
  );
}

export default App;
