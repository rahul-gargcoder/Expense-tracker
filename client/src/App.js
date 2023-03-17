import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes,Route} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Protectroute from './Protectroutes/Auth'
function App() {
  return (
    <Routes>
    <Route path='/' element={<Protectroute component={Home}/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
  );
}

export default App;
