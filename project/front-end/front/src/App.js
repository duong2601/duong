import logo from './logo.svg';
import './App.css';
// import LayoutNavbar from '../src/home/LayoutNavbar';
// import PopUp from './components/PopUp';
import '../src/home/LayoutNavbar'
// import MenuDetail from './home/MenuDetail';
import Products from './components/Products';
import About from './components/About';
import Home from './home/Home';
import { Route, Routes } from 'react-router-dom';

import TestDrive from './components/TestDrive';
// import Carousel from './home/Carousel';
import Login from './components/Login';
import ManageUser from './components/ManageUser';
import InforUser from './components/InforUser';
import RecentCar from './Content/RecentCar';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/product' element={<Products />} />
        <Route path='/login' element={<Login />} />
        <Route path='/manage_user' element={<ManageUser />} />
        <Route path='/inforUser' element={<InforUser />} />
      </Routes>
      <TestDrive />
      <RecentCar />
    </>
  );
}

export default App;
