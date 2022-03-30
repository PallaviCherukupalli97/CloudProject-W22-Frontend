import './App.css';
import {Routes, Route} from 'react-router-dom';
import Login from './Components/Login';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login></Login>}></Route>
      </Routes>
    </div>
  );
}

export default App;
