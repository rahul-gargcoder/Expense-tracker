import './App.css';
import Home from './components/Home';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Logout from './components/Logout';
import Protectroute from './Protectroutes/Checkall'
import Protectauth from './Protectroutes/Checkauth'
function App() {
  return (
    <div>
    <BrowserRouter>
    {/* <Sidebar></Sidebar> */}
    <Routes>
    {/* <Route path='/' element={<Protectroute component={Home}/>}/>
     */}
     <Route path='/' element={<Protectroute><Home/></Protectroute>}/>
    <Route path='/signup' element={<Protectauth><Signup/></Protectauth>}/>
    {/* <Route path='/login' element={<Protectauth component={Login}/>}/> */}
    <Route path='/login' element={<Protectauth><Login/></Protectauth>}/>
    <Route pth='/logout' element={<Logout/>}/>
    {/* <Route path='/login' element={<Login/>}/> */}
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
