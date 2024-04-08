import { Routes, Route } from 'react-router-dom';
import {useEffect} from 'react';
import { useDispatch } from 'react-redux';
import './App.css';
import LandingPage from './pages/LandingPage';
import EditingPage from './pages/EditingPage';
import Header from './components/Header';

function App() {
  const dispatch = useDispatch();
  
  useEffect(() =>{

  })

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='editor' element={<EditingPage />} />
      </Routes>
    </div>
  );
}

export default App;
