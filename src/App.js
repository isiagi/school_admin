import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Hey from './components/pages/Home'
import LoginScreen from './components/Login';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' element={<LoginScreen />} />
        <Route path='/admin' element={<Hey />} />
      </Routes>
    </Router>
    </div>
  );
}

export default App;
