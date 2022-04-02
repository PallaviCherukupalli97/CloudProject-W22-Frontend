import './App.css';
import {Routes, Route} from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import NavBar from './Components/NavBar';
import Login from './Components/Login';
import Register from './Components/Register';
import Dashboard from './Components/Dashboard';

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Register></Register>}></Route>
      </Routes>
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>

    </div>
  );
}

export default App;
