import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Protectroute from './Protectroutes/Auth'
import Sidebar from './components/Sidebar';
function App() {
  return (
    <div>
    <BrowserRouter>
    {/* <Sidebar></Sidebar> */}
    <Routes>
    <Route path='/' element={<Protectroute component={Home}/>}/>
    <Route path='/signup' element={<Signup/>}/>
    <Route path='/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
