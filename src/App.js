import './App.css';
import Topbar from './component/topbar/Topbar'
import Sidebar from './component/sidebar/Sidebar';
import Home from './pages/home/Home'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Userlist from './pages/UserList/Userlist';
import User from './pages/user/User';
import Newuser from './pages/newuser/Newuser';
import Productlist from './pages/productlist/Productlist';
import Product from './pages/porduct/Product';
import Newproduct from './pages/newproduct/Newproduct';

function App() {
  return (
    <Router>
        <Topbar />
        <div className='container'>
          <Sidebar />
          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/users" element={<Userlist/>}/>
              <Route path="/user/:userid" element={<User/>}/>
              <Route path="/newuser" element={<Newuser/>}/>
              <Route path="/products" element={<Productlist/>}/>
              <Route path="/product/:productid" element={<Product/>}/>
              <Route path="/newproduct" element={<Newproduct/>}/>
          </Routes>
        </div>
    </Router>
  );
}

export default App;
