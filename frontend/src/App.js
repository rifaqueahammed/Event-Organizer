import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
import LandinPage from './Pages/User/LandinPage';



function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<LandinPage/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
