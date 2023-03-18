import './App.css';
import Home from './components/Home';
import {Routes,Route, BrowserRouter} from 'react-router-dom'
import Signup from './components/Signup';
import Login from './components/Login';
import Main from './components/Main';
import Protectroute from './Protectroutes/Checkall'
import Protectauth from './Protectroutes/Checkauth'
import { Layout } from './components/Layout';
import Show from './components/Show';
import History from './components/History';
import Stats from './components/Stats';
function App() {
  return (
    <div className='app-container'>
    
    <BrowserRouter>
    
    <Routes>

    <Route path='/' element={<Layout/>}>
      <Route index element={<Show/>}/>
      <Route path='/history' element={<History/>}/>
      <Route path='/stats' element={<Stats/>}/>    
    </Route>
    
    {/* <Route path='/' element={<Protectroute><Home/></Protectroute>}/> */}
    
    <Route path='/signup' element={<Protectauth><Signup/></Protectauth>}/>
    <Route path='/login' element={<Protectauth><Login/></Protectauth>}/>
   
   </Routes>
   </BrowserRouter>
   </div>
  );
}

export default App;
