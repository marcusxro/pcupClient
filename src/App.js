import logo from './logo.svg';
import './App.css';
import GetData from './pages/GetData';
import DataPage from './pages/DataPage';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import ViewData from './pages/ViewData';
function App() {
  return (
    <Router>
    <div className="App"> 
      <Routes>
        <Route path='/' element={<DataPage /> }/>
        <Route path='/data/:item' element={ <ViewData /> }/>

      </Routes>
    </div>
    </Router>
  );
}

export default App;
