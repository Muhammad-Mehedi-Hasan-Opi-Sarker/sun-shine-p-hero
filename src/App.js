import logo from './logo.svg';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home';
import Login from './Pages/LogRes/Login';
import Registration from './Pages/LogRes/Registration';
import Header from './Pages/sheard/Header';

function App() {
  return (
    <div className="">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/home' element={<Home></Home>}></Route>
      <Route path='/login' element={<Login></Login>}></Route>
      <Route path='/registration' element={<Registration></Registration>}></Route>
     </Routes>
    </div>
  );
}

export default App;
