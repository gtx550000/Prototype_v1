import ButtonAppBar from './components/navber/navber';
import Logout from './components/logout/logout';
import Home from './components/home/home';
import Profile from './components/profile/profile';
import Error from './components/error/error';
import Register from './components/register_game/home';
import Report from './components/report/report';
import Login from './components/login/login';
import Categories from './components/categorie/categories';
import Cart from './components/cart/cart';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div>
        <ButtonAppBar></ButtonAppBar>
        <Routes>
          <Route path="/logout" element={<Logout />}></Route>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="*" element={<Error />}></Route>
          <Route path="/register" element={<Register />}>
            {' '}
          </Route>
          <Route path="/report" element={<Report />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
