import { Routes, Route} from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<></>} />
        <Route path='contact' element={<></>} />
        <Route path='directory' element={<></>} />
      </Routes>
    </div>
  );
}

export default App;
