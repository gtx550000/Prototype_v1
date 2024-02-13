import { useState } from 'react'
import ButtonAppBar from './components/navber/navber'
import TemporaryDrawer from './components/sidebar/sidebar'
import Logout from './components/logout/logout'
import Home from './components/home/home'
import Profile from './components/profile/profile'
import Error from './components/error/error'
import Register from './components/register_game/step/step'
import Report from './components/report/report'

import { BrowserRouter as Router , Routes , Route } from 'react-router-dom';

function App() {
  return (
    <Router>
   <div>
    <ButtonAppBar></ButtonAppBar>
    <Routes>
       <Route path='/logout' element={<Logout/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/profile' element={<Profile/>}></Route>
       <Route path='*' element={<Error/>}></Route>
       <Route path='/register' element={<Register/>}> </Route>
       <Route path='/report' element={<Report/>}></Route>

    </Routes>   
   </div>
   </Router>

   
  )
}

export default App
