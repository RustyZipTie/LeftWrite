import { Routes, Route} from 'react-router-dom';
import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import EditingPage from './pages/EditingPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='editor' element={<EditingPage />} />
      </Routes>
    </div>
  );
}

export default App;
