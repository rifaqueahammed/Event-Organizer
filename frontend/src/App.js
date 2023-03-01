import { BrowserRouter as Router, Route,Routes } from 'react-router-dom';
import './App.css';
// import LandinPage from './Pages/User/LandinPage';
import User from './Routes/User';
import ServiceProvider from './Routes/ServiceProvider';
import LandinPage from './Pages/User/LandinPage';



function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={<LandinPage/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/serviceprovider' element={<ServiceProvider/>}></Route>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
