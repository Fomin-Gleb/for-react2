import Header from "./Header"
import Footer from './Footer';
import {Outlet} from 'react-router-dom';
import '../App.css';

const Layout =()=>{
    return (
  <div>
    <Header/> 
    <div className="main">
       <Outlet/>
       </div>    
    <Footer/>
  </div>
    )
}
export default Layout