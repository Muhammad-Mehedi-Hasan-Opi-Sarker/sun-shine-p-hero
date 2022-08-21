import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/LogRes/Login';
import Registration from './Pages/LogRes/Registration';
import Header from './Pages/sheard/Header';
import Explore from './Pages/Process/Explore';
import Empty from './Pages/Empty';
import Services from './Pages/Services/Services';
import About from './Pages/About';
import Blog from './Pages/Blog/Blog';
import Footer from './Pages/sheard/Footer';
import RequireAuth from './Pages/RequireAuth';

function App() {
  return (
    <div className="">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/services' element={
        <RequireAuth><Services></Services></RequireAuth>
      }></Route>
      <Route path='/about' element={<About></About>}></Route>
      <Route path='/blog' element={<Blog></Blog>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/explore' element={<Explore></Explore>}></Route>
      <Route path='/register' element={<Registration></Registration>}></Route>
      <Route path='/*' element={<Empty></Empty>}></Route>
     </Routes>
     <Footer></Footer>
    </div>
  );
}

export default App;
